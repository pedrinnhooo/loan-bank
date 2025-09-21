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

        const BRAND = {
            name: 'Pedro Ruffo . Dev',
            primary: '#5102c4',
            dark: '#111827',
            muted: '#6B7280',
            border: '#E5E7EB',
            bg: '#F7F9FC',
        };

        function escapeHtml(str = '') {
            return String(str)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }


        function buildEmailHtml(params) {
            const { name, email, phone, subject, message, brand = BRAND } = params;

            const safeMsg = escapeHtml(message).replace(/\n/g, '<br>');
            const safeName = escapeHtml(name);
            const safeEmail = escapeHtml(email);
            const safePhone = escapeHtml(phone || '');
            const safeSubject = escapeHtml(subject || 'Contato');
            const now = new Date().toLocaleString('pt-BR');
            const year = new Date().getFullYear();

            return `<!doctype html>
                    <html lang="pt-BR">
                        <head>
                            <meta charset="utf-8">
                            <meta name="x-apple-disable-message-reformatting">
                            <meta name="format-detection" content="telephone=no,address=no,email=no,date=no,url=no">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>${brand.name} • Nova mensagem do site</title>
                            <style>
                                @media (max-width: 600px) {
                                .container { width: 100% !important; }
                                .px { padding-left: 16px !important; padding-right: 16px !important; }
                                }
                            </style>
                        </head>
                        <body style="margin:0; padding:0; background:${brand.bg};">
                            <div style="display:none; max-height:0; overflow:hidden; opacity:0;">
                                Nova mensagem no site • ${safeSubject} • de ${safeName}
                            </div>

                            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="background:${brand.bg};">
                                <tr>
                                <td align="center" style="padding:24px;">
                                    <table role="presentation" class="container" width="600" cellspacing="0" cellpadding="0" border="0" style="width:600px; background:#ffffff; border-radius:12px; overflow:hidden; box-shadow:0 2px 8px rgba(0,0,0,0.04);">
                                    <tr>
                                        <td style="background:${brand.primary}; padding:24px 24px;">
                                        <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                            <tr>
                                            <td align="left" style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; color:#fff; font-size:20px; font-weight:700;">
                                                ${brand.name}
                                            </td>
                                            <td align="right" style="font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; color:#EAF2FF; font-size:13px;">
                                                Nova mensagem do site
                                            </td>
                                            </tr>
                                        </table>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="px" style="padding:28px 32px 8px 32px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; color:${brand.dark};">
                                        <h1 style="margin:0 0 4px 0; font-size:22px; line-height:1.3; font-weight:800;">🔔 Novo contato recebido</h1>
                                        <p style="margin:0; color:${brand.muted}; font-size:14px;">
                                            Assunto: <strong style="color:${brand.dark};">${safeSubject}</strong>
                                        </p>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="px" style="padding:16px 32px;">
                                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border:1px solid ${brand.border}; border-radius:10px;">
                                            <tr>
                                            <td style="padding:16px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:14px; color:${brand.dark};">
                                                <table width="100%" role="presentation" cellspacing="0" cellpadding="0" border="0">
                                                <tr><td style="padding:6px 0;"><strong>👤 Nome:</strong> ${safeName}</td></tr>
                                                <tr><td style="padding:6px 0;"><strong>📧 E-mail:</strong> <a href="mailto:${safeEmail}" style="color:${brand.primary}; text-decoration:none;">${safeEmail}</a></td></tr>
                                                ${safePhone ? `<tr><td style="padding:6px 0;"><strong>📱 Telefone:</strong> <a href="tel:${safePhone}" style="color:${brand.primary}; text-decoration:none;">${safePhone}</a></td></tr>` : ''}
                                                <tr><td style="padding:6px 0;"><strong>📋 Assunto:</strong> ${safeSubject}</td></tr>
                                                </table>
                                            </td>
                                            </tr>
                                        </table>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td class="px" style="padding:8px 32px 0 32px;">
                                        <h3 style="margin:0 0 8px 0; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:16px; color:${brand.dark};">💬 Mensagem</h3>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td class="px" style="padding:0 32px 24px 32px;">
                                        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-left:4px solid ${brand.primary}; background:#ffffff;">
                                            <tr>
                                            <td style="padding:16px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:15px; line-height:1.6; color:${brand.dark};">
                                                ${safeMsg}
                                            </td>
                                            </tr>
                                        </table>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td align="left" class="px" style="padding:0 32px 24px 32px;">
                                        <a href="mailto:${safeEmail}?subject=Re:%20${encodeURIComponent(safeSubject)}"
                                            style="display:inline-block; background:${brand.primary}; color:#fff; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; font-size:14px; font-weight:700; text-decoration:none; padding:12px 18px; border-radius:10px;">
                                            Responder ${safeName}
                                        </a>
                                        </td>
                                    </tr>

                                    <tr><td style="padding:0 32px;"><hr style="border:none; border-top:1px solid ${brand.border}; margin:0;"></td></tr>

                                    <tr>
                                        <td class="px" style="padding:20px 32px 28px 32px; font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Arial,sans-serif; text-align:left;">
                                        <p style="margin:0 0 6px 0; color:${brand.muted}; font-size:12px;">Enviado automaticamente em ${now}.</p>
                                        <p style="margin:0; color:${brand.muted}; font-size:12px;">© ${year} ${brand.name}. Todos os direitos reservados.</p>
                                        </td>
                                    </tr>

                                    </table>
                                </td>
                                </tr>
                            </table>
                        </body>
                    </html>`;
        }

        const emailResult = await sendEmailNotification({
            to: process.env.EMAIL_TO || 'pedro.ruffo.dev@gmail.com',
            subject: `Contato do site - ${subject}`,
            html: buildEmailHtml({ name, email, phone, subject, message }),
            replyTo: email
        });

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

async function sendEmailNotification(emailData) {
    try {
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST || 'smtp.gmail.com',
            port: parseInt(process.env.EMAIL_PORT) || 587,
            secure: false, 
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })

        await transporter.verify()

        const info = await transporter.sendMail({
            from: `"Site Pedro Ruffo" <${process.env.EMAIL_FROM}>`,
            to: emailData.to,
            replyTo: emailData.replyTo,
            subject: emailData.subject,
            html: emailData.html
        })

        return { success: true, messageId: info.messageId }

    } catch (error) {
        return { success: false, error: error.message }
    }
}

async function sendWhatsAppNotification(whatsappData) {
    try {
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

            return { success: true, data: response.data }
        }

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

            return { success: true, data: response.data }
        }

        return { success: false, error: 'WhatsApp API não configurada' }

    } catch (error) {
        return { success: false, error: error.message }
    }
}