import nodemailer from 'nodemailer'
import axios from 'axios'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        const { name, email, phone, subject, message } = body

        // Validação básica
        if (!name || !email || !message) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Campos obrigatórios não preenchidos'
            })
        }

        console.log('📧 Enviando email para:', process.env.EMAIL_TO)
        console.log('📝 Dados recebidos:', { name, email, phone, subject, message })

        // Enviar email
        const emailResult = await sendEmailNotification({
            to: process.env.EMAIL_TO || 'pedro.ruffo.dev@gmail.com',
            subject: `Contato do site - ${subject}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #8800ffff; border-bottom: 2px solid #8800ffff; padding-bottom: 10px;">
            🔔 Nova mensagem do site
          </h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>👤 Nome:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>📱 Telefone:</strong> <a href="tel:${phone}">${phone}</a></p>
            <p><strong>📋 Assunto:</strong> ${subject}</p>
          </div>
          <div style="background: white; padding: 20px; border-left: 4px solid #8800ffff; margin: 20px 0;">
            <h3>💬 Mensagem:</h3>
            <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 12px; text-align: center;">
            Enviado automaticamente do site em ${new Date().toLocaleString('pt-BR')}
          </p>
        </div>
      `,
            replyTo: email
        })

        // Enviar para WhatsApp
        const whatsappMessage = `🔔 *Nova solicitação de contato do site*

👤 *Nome:* ${name}
📧 *Email:* ${email}
📱 *Telefone:* ${phone}
📋 *Assunto:* ${subject}

💬 *Mensagem:*
${message}

---
_Enviado automaticamente do site em ${new Date().toLocaleString('pt-BR')}_`

        const whatsappResult = await sendWhatsAppNotification({
            phone: process.env.WHATSAPP_PHONE_NUMBER || '5511912117442',
            message: whatsappMessage
        })

        return {
            success: true,
            message: 'Mensagem enviada com sucesso!',
            emailSent: emailResult.success,
            whatsappSent: whatsappResult.success
        }

    } catch (error) {
        console.error('Erro ao processar contato:', error)
        throw createError({
            statusCode: 500,
            statusMessage: 'Erro interno do servidor'
        })
    }
})

// Função para enviar email usando Nodemailer
async function sendEmailNotification(emailData) {
    try {
        // Configurar transporter do Nodemailer
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.EMAIL_PORT) || 587,
            secure: false, // true para 465, false para outras portas
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })

        // Verificar conexão
        await transporter.verify()

        // Enviar email
        const info = await transporter.sendMail({
            from: `"Site Pedro Ruffo" <${process.env.EMAIL_FROM}>`,
            to: emailData.to,
            replyTo: emailData.replyTo,
            subject: emailData.subject,
            html: emailData.html
        })

        console.log('✅ Email enviado:', info.messageId)
        return { success: true, messageId: info.messageId }

    } catch (error) {
        console.error('❌ Erro ao enviar email:', error)
        return { success: false, error: error.message }
    }
}

// Função para enviar WhatsApp usando WhatsApp Business API
async function sendWhatsAppNotification(whatsappData) {
    try {
        // Opção 1: WhatsApp Business API (Meta)
        if (process.env.WHATSAPP_API_URL && process.env.WHATSAPP_ACCESS_TOKEN) {
            const response = await axios.post(
                process.env.WHATSAPP_API_URL,
                {
                    messaging_product: "whatsapp",
                    to: whatsappData.phone,
                    type: "text",
                    text: {
                        body: whatsappData.message
                    }
                },
                {
                    headers: {
                        'Authorization': `Bearer ${process.env.WHATSAPP_ACCESS_TOKEN}`,
                        'Content-Type': 'application/json'
                    }
                }
            )

            console.log('✅ WhatsApp enviado via Meta API:', response.data)
            return { success: true, data: response.data }
        }

        // Opção 2: Twilio WhatsApp API
        if (process.env.TWILIO_ACCOUNT_SID && process.env.TWILIO_AUTH_TOKEN) {
            const twilioAuth = Buffer.from(
                `${process.env.TWILIO_ACCOUNT_SID}:${process.env.TWILIO_AUTH_TOKEN}`
            ).toString('base64')

            const response = await axios.post(
                `https://api.twilio.com/2010-04-01/Accounts/${process.env.TWILIO_ACCOUNT_SID}/Messages.json`,
                new URLSearchParams({
                    From: process.env.TWILIO_WHATSAPP_FROM,
                    To: process.env.TWILIO_WHATSAPP_TO,
                    Body: whatsappData.message
                }),
                {
                    headers: {
                        'Authorization': `Basic ${twilioAuth}`,
                        'Content-Type': 'application/x-www-form-urlencoded'
                    }
                }
            )

            console.log('✅ WhatsApp enviado via Twilio:', response.data)
            return { success: true, data: response.data }
        }

        // Se nenhuma API estiver configurada, apenas log
        console.log('⚠️ WhatsApp não configurado. Mensagem que seria enviada:', whatsappData.message)
        return { success: false, error: 'WhatsApp API não configurada' }

    } catch (error) {
        console.error('❌ Erro ao enviar WhatsApp:', error.response?.data || error.message)
        return { success: false, error: error.message }
    }
}