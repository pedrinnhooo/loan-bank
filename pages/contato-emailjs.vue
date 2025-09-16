<template>
    <div class="apple-contact">
        <!-- Mesmo template da página original, mas com EmailJS -->
        <!-- ... (mesmo conteúdo visual) ... -->
        
        <!-- Contact Form -->
        <section class="contact-methods section-padding">
            <div class="container-apple">
                <div class="contact-grid grid-apple grid-2">
                    <!-- Contact Info -->
                    <div class="contact-info scroll-animate">
                        <h2 class="text-title-1 mb-lg">Entre em Contato</h2>
                        <p class="text-body mb-xl" style="color: var(--apple-text-secondary);">
                            Estou sempre disponível para discutir novos projetos, oportunidades de colaboração 
                            ou simplesmente trocar ideias sobre tecnologia.
                        </p>
                    </div>

                    <!-- Contact Form -->
                    <div class="contact-form-container scroll-animate">
                        <div class="glass-card">
                            <h3 class="text-title-2 mb-lg">Envie uma Mensagem</h3>
                            <form @submit.prevent="submitForm" class="contact-form">
                                <div class="form-group">
                                    <label for="name" class="form-label">Nome</label>
                                    <input 
                                        type="text" 
                                        id="name" 
                                        v-model="form.name"
                                        class="form-input"
                                        placeholder="Seu nome completo"
                                        required
                                    >
                                </div>

                                <div class="form-group">
                                    <label for="email" class="form-label">Email</label>
                                    <input 
                                        type="email" 
                                        id="email" 
                                        v-model="form.email"
                                        class="form-input"
                                        placeholder="seu@email.com"
                                        required
                                    >
                                </div>

                                <div class="form-group">
                                    <label for="subject" class="form-label">Assunto</label>
                                    <select 
                                        id="subject" 
                                        v-model="form.subject"
                                        class="form-input"
                                        required
                                    >
                                        <option value="">Selecione um assunto</option>
                                        <option value="projeto">Novo Projeto</option>
                                        <option value="consultoria">Consultoria</option>
                                        <option value="colaboracao">Colaboração</option>
                                        <option value="outros">Outros</option>
                                    </select>
                                </div>

                                <div class="form-group">
                                    <label for="message" class="form-label">Mensagem</label>
                                    <textarea 
                                        id="message" 
                                        v-model="form.message"
                                        class="form-textarea"
                                        placeholder="Conte-me sobre seu projeto ou dúvida..."
                                        rows="5"
                                        required
                                    ></textarea>
                                </div>

                                <button 
                                    type="submit" 
                                    class="btn-apple btn-apple-primary"
                                    :disabled="isSubmitting"
                                >
                                    <span v-if="!isSubmitting">
                                        <i class="bi bi-send"></i> Enviar Mensagem
                                    </span>
                                    <span v-else>
                                        <i class="bi bi-hourglass-split"></i> Enviando...
                                    </span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Success Modal -->
        <transition name="modal">
            <div v-if="showSuccessModal" class="modal-overlay" @click="closeSuccessModal">
                <div class="modal-content glass-card text-center" @click.stop>
                    <div class="success-icon">
                        <i class="bi bi-check-circle"></i>
                    </div>
                    <h3 class="text-title-2 mb-md">Mensagem Enviada!</h3>
                    <p class="text-body mb-lg" style="color: var(--apple-text-secondary);">
                        Sua mensagem foi enviada com sucesso! Retornarei o contato em breve.
                    </p>
                    <button @click="closeSuccessModal" class="btn-apple btn-apple-primary">
                        Fechar
                    </button>
                </div>
            </div>
        </transition>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import emailjs from '@emailjs/browser'

const form = ref({
    name: '',
    email: '',
    subject: '',
    message: ''
})

const isSubmitting = ref(false)
const showSuccessModal = ref(false)

// Configuração do EmailJS
const EMAILJS_CONFIG = {
    serviceId: 'service_xxxxxxx', // Substitua pelo seu Service ID
    templateId: 'template_xxxxxxx', // Substitua pelo seu Template ID
    publicKey: 'xxxxxxxxxxxxxxx' // Substitua pela sua Public Key
}

const submitForm = async () => {
    isSubmitting.value = true
    
    try {
        // Enviar email via EmailJS
        const templateParams = {
            from_name: form.value.name,
            from_email: form.value.email,
            subject: getSubjectLabel(form.value.subject),
            message: form.value.message,
            to_email: 'pedro.ruffo.dev@gmail.com'
        }

        await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.templateId,
            templateParams,
            EMAILJS_CONFIG.publicKey
        )

        // Enviar para WhatsApp (opcional)
        sendToWhatsApp()

        // Reset form
        form.value = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
        
        showSuccessModal.value = true
        
    } catch (error) {
        console.error('Erro ao enviar formulário:', error)
        alert('Erro ao enviar mensagem. Tente novamente.')
    } finally {
        isSubmitting.value = false
    }
}

const sendToWhatsApp = () => {
    const whatsappMessage = `🔔 *Nova solicitação de contato do site*

👤 *Nome:* ${form.value.name}
📧 *Email:* ${form.value.email}
📋 *Assunto:* ${getSubjectLabel(form.value.subject)}

💬 *Mensagem:*
${form.value.message}

---
_Enviado automaticamente do site_`

    // Abrir WhatsApp em nova aba (opcional)
    const whatsappUrl = `https://wa.me/5511912117442?text=${encodeURIComponent(whatsappMessage)}`
    window.open(whatsappUrl, '_blank')
}

const getSubjectLabel = (value) => {
    const subjects = {
        'projeto': 'Novo Projeto',
        'consultoria': 'Consultoria',
        'colaboracao': 'Colaboração',
        'outros': 'Outros'
    }
    return subjects[value] || value
}

const closeSuccessModal = () => {
    showSuccessModal.value = false
}
</script>

<style scoped>
/* Mesmos estilos da página original */
.apple-contact {
    background: var(--apple-background);
}

.contact-methods {
    background: var(--apple-surface);
}

.contact-grid {
    gap: var(--spacing-3xl);
    align-items: start;
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-lg);
}

.form-group {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-sm);
}

.form-label {
    font-weight: 500;
    color: var(--apple-text-primary);
    font-size: 0.875rem;
}

.form-input,
.form-textarea {
    padding: var(--spacing-md);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: var(--radius-md);
    color: var(--apple-text-primary);
    font-family: var(--font-system);
    font-size: 1rem;
    transition: all var(--transition-normal);
}

.form-input:focus,
.form-textarea:focus {
    outline: none;
    border-color: var(--apple-blue);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
}

.form-textarea {
    resize: vertical;
    min-height: 120px;
}

.btn-apple:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.btn-apple i {
    font-size: 1rem;
}

/* Modal styles */
.modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(20px);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 2000;
    padding: var(--spacing-lg);
}

.modal-content {
    max-width: 400px;
    width: 100%;
    padding: var(--spacing-3xl);
}

.success-icon {
    width: 80px;
    height: 80px;
    background: var(--apple-green);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto var(--spacing-lg);
    font-size: 2rem;
    color: white;
}

.modal-enter-active,
.modal-leave-active {
    transition: all var(--transition-normal);
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
    transform: scale(0.9);
}
</style>