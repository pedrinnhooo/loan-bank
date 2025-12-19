    <template>
        <div class="apple-contact">
            <!-- Hero Section -->
            <section class="contact-hero section-padding">
                <div class="hero-background">
                    <div class="floating-elements">
                        <div class="floating-element" v-for="i in 6" :key="i" :style="getFloatingStyle(i)"></div>
                    </div>
                </div>
                <div class="container-apple">
                    <div class="hero-content text-center scroll-animate">
                        <h1 class="text-large-title gradient-text mb-lg">{{ t('contact.hero.title') }}</h1>
                        <p class="text-title-3 mb-xl"
                            style="color: var(--apple-text-secondary); max-width: 600px; margin: 0 auto;">
                            {{ t('contact.hero.subtitle') }}
                        </p>
                    </div>
                </div>
            </section>

            <!-- Contact Methods -->
            <section class="contact-methods section-padding">
                <div class="container-apple">
                    <div class="contact-grid grid-apple grid-2">
                        <!-- Contact Info -->
                        <div class="contact-info scroll-animate">
                            <h2 class="text-title-1 mb-lg">{{ t('contact.info.title') }}</h2>
                            <p class="text-body mb-xl" style="color: var(--apple-text-secondary);">
                                {{ t('contact.info.description') }}
                            </p>

                            <div class="contact-items">
                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <i class="bi bi-telephone"></i>
                                    </div>
                                    <div class="contact-details">
                                        <h4 class="text-callout mb-sm">{{ t('contact.info.items.phone.label') }}</h4>
                                        <p class="text-subhead">
                                            <a href="tel:+5511912117442" style="color: var(--apple-blue);">
                                                {{ t('contact.info.items.phone.value') }}
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <i class="bi bi-envelope"></i>
                                    </div>
                                    <div class="contact-details">
                                        <h4 class="text-callout mb-sm">{{ t('contact.info.items.email.label') }}</h4>
                                        <p class="text-subhead">
                                            <a href="mailto:pedro.ruffo.dev@gmail.com"
                                                style="color: var(--apple-blue);">
                                                {{ t('contact.info.items.email.value') }}
                                            </a>
                                        </p>
                                    </div>
                                </div>

                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <i class="bi bi-geo-alt"></i>
                                    </div>
                                    <div class="contact-details">
                                        <h4 class="text-callout mb-sm">{{ t('contact.info.items.location.label') }}</h4>
                                        <p class="text-subhead" style="color: var(--apple-text-secondary);">
                                            {{ t('contact.info.items.location.value') }}
                                        </p>
                                    </div>
                                </div>

                                <div class="contact-item">
                                    <div class="contact-icon">
                                        <i class="bi bi-clock"></i>
                                    </div>
                                    <div class="contact-details">
                                        <h4 class="text-callout mb-sm">{{ t('contact.info.items.availability.label') }}
                                        </h4>
                                        <p class="text-subhead" style="color: var(--apple-text-secondary);">
                                            {{ t('contact.info.items.availability.value') }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Contact Form -->
                        <div class="contact-form-container scroll-animate">
                            <div class="glass-card">
                                <h3 class="text-title-2 mb-lg">{{ t('contact.form.title') }}</h3>
                                <form @submit.prevent="submitForm" class="contact-form">
                                    <div class="form-group">
                                        <label for="name" class="form-label">{{ t('contact.form.labels.name') }}</label>
                                        <input type="text" id="name" v-model="form.name" class="form-input"
                                            :placeholder="t('contact.form.placeholders.name')" required>
                                    </div>

                                    <div class="form-group">
                                        <label for="email" class="form-label">{{ t('contact.form.labels.email')
                                            }}</label>
                                        <input type="email" id="email" v-model="form.email" class="form-input"
                                            :placeholder="t('contact.form.placeholders.email')" required>
                                    </div>

                                    <div class="form-group">
                                        <label for="phone" class="form-label">{{ t('contact.form.labels.phone')
                                            }}</label>
                                        <div class="phone-input-container">
                                            <select v-model="form.countryCode" class="form-input country-select">
                                                <option value="+55" selected>🇧🇷 +55</option>
                                                <option value="+1">🇺🇸 +1</option>
                                                <option value="+44">🇬🇧 +44</option>
                                                <option value="+33">🇫🇷 +33</option>
                                                <option value="+49">🇩🇪 +49</option>
                                                <option value="+34">🇪🇸 +34</option>
                                                <option value="+39">🇮🇹 +39</option>
                                                <option value="+351">🇵🇹 +351</option>
                                                <option value="+54">🇦🇷 +54</option>
                                                <option value="+52">🇲🇽 +52</option>
                                            </select>
                                            <input type="tel" id="phone" v-model="form.phone" @input="formatPhoneNumber"
                                                @keypress="validatePhoneInput" class="form-input phone-input"
                                                :placeholder="getPhonePlaceholder()" :maxlength="getMaxLength()"
                                                required>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label for="subject" class="form-label">{{ t('contact.form.labels.subject')
                                            }}</label>
                                        <select id="subject" v-model="form.subject" class="form-input form-select"
                                            required>
                                            <option value="" disabled>{{ t('contact.form.subject.placeholder') }}
                                            </option>
                                            <option value="projeto">{{ t('contact.form.subject.options.projeto') }}
                                            </option>
                                            <option value="consultoria">{{ t('contact.form.subject.options.consultoria')
                                                }}</option>
                                            <option value="colaboracao">{{ t('contact.form.subject.options.colaboracao')
                                                }}</option>
                                            <option value="outros">{{ t('contact.form.subject.options.outros') }}
                                            </option>
                                        </select>
                                    </div>

                                    <div class="form-group">
                                        <label for="message" class="form-label">{{ t('contact.form.labels.message')
                                            }}</label>
                                        <textarea id="message" v-model="form.message" class="form-textarea"
                                            :placeholder="t('contact.form.placeholders.message')" rows="5"
                                            required></textarea>
                                    </div>

                                    <button type="submit" class="btn-apple btn-apple-primary" :disabled="isSubmitting">
                                        <span v-if="!isSubmitting">
                                            <i class="bi bi-send"></i> {{ t('contact.form.button.submit') }}
                                        </span>
                                        <span v-else>
                                            <i class="bi bi-hourglass-split"></i> {{ t('contact.form.button.submitting')
                                            }}
                                        </span>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Social Links -->
            <section class="social-section section-padding">
                <div class="container-apple">
                    <div class="social-content text-center scroll-animate">
                        <h2 class="text-title-1 mb-lg">{{ t('contact.social.title') }}</h2>
                        <p class="text-body mb-xl" style="color: var(--apple-text-secondary);">
                            {{ t('contact.social.description') }}
                        </p>

                        <div class="social-links">
                            <a href="https://github.com/pedrinnhooo" target="_blank" rel="noopener noreferrer"
                                class="social-link">
                                <div class="social-icon">
                                    <i class="bi bi-github"></i>
                                </div>
                                <div class="social-info">
                                    <h4 class="text-callout">{{ t('contact.social.links.github.title') }}</h4>
                                    <p class="text-subhead">{{ t('contact.social.links.github.subtitle') }}</p>
                                </div>
                            </a>

                            <a href="https://linkedin.com/in/pedro-ruffo-501385181" target="_blank"
                                rel="noopener noreferrer" class="social-link">
                                <div class="social-icon">
                                    <i class="bi bi-linkedin"></i>
                                </div>
                                <div class="social-info">
                                    <h4 class="text-callout">{{ t('contact.social.links.linkedin.title') }}</h4>
                                    <p class="text-subhead">{{ t('contact.social.links.linkedin.subtitle') }}</p>
                                </div>
                            </a>

                            <a href="https://wa.me/5511912117442" target="_blank" rel="noopener noreferrer"
                                class="social-link">
                                <div class="social-icon">
                                    <i class="bi bi-whatsapp"></i>
                                </div>
                                <div class="social-info">
                                    <h4 class="text-callout">{{ t('contact.social.links.whatsapp.title') }}</h4>
                                    <p class="text-subhead">{{ t('contact.social.links.whatsapp.subtitle') }}</p>
                                </div>
                            </a>

                            <a href="https://discord.gg/NwWySEJF" target="_blank" rel="noopener noreferrer"
                                class="social-link">
                                <div class="social-icon">
                                    <i class="bi bi-discord"></i>
                                </div>
                                <div class="social-info">
                                    <h4 class="text-callout">{{ t('contact.social.links.discord.title') }}</h4>
                                    <p class="text-subhead">{{ t('contact.social.links.discord.subtitle') }}</p>
                                </div>
                            </a>
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
                        <h3 class="text-title-2 mb-md">{{ t('contact.modal.success.title') }}</h3>
                        <p class="text-body mb-lg" style="color: var(--apple-text-secondary);">
                            {{ t('contact.modal.success.description') }}
                        </p>
                        <button @click="closeSuccessModal" class="btn-apple btn-apple-primary">
                            {{ t('contact.modal.success.close') }}
                        </button>
                    </div>
                </div>
            </transition>
        </div>
    </template>

<script setup>
import { ref, watch } from 'vue'
import { useScrollAnimation } from '~/composables/useAnimations'

const { t } = useI18n()

// Initialize scroll animations
useScrollAnimation()

const form = ref({
    name: '',
    email: '',
    countryCode: '+55',
    phone: '',
    subject: '',
    message: ''
})

const isSubmitting = ref(false)
const showSuccessModal = ref(false)

const submitForm = async () => {
    isSubmitting.value = true

    try {
        // Enviar dados para a API
        const response = await $fetch('/api/send-contact', {
            method: 'POST',
            body: {
                name: form.value.name,
                email: form.value.email,
                phone: `${form.value.countryCode} ${form.value.phone}`,
                subject: getSubjectLabel(form.value.subject),
                message: form.value.message
            }
        })

        if (response.success) {
            // Reset form
            form.value = {
                name: '',
                email: '',
                countryCode: '+55',
                phone: '',
                subject: '',
                message: ''
            }

            showSuccessModal.value = true
        } else {
            throw new Error(t('contact.form.feedback.sendFail'))
        }

    } catch (error) {
        console.error('Erro ao enviar formulário:', error)
        alert(t('contact.form.feedback.sendError'))
    } finally {
        isSubmitting.value = false
    }
}



const getSubjectLabel = (value) => {
    const subjects = {
        'projeto': t('contact.form.subject.options.projeto'),
        'consultoria': t('contact.form.subject.options.consultoria'),
        'colaboracao': t('contact.form.subject.options.colaboracao'),
        'outros': t('contact.form.subject.options.outros')
    }
    return subjects[value] || value
}

const closeSuccessModal = () => {
    showSuccessModal.value = false
}

// Função para formatar o número de telefone
const formatPhoneNumber = (event) => {
    let value = event.target.value.replace(/\D/g, '') // Remove tudo que não é dígito

    // Limita o número de dígitos baseado no país
    const maxDigits = {
        '+55': 11, // Brasil
        '+1': 10,  // EUA
        '+44': 11, // Reino Unido
        '+33': 10, // França
        '+49': 11, // Alemanha
        '+34': 9,  // Espanha
        '+39': 10, // Itália
        '+351': 9, // Portugal
        '+54': 10, // Argentina
        '+52': 10  // México
    }

    const maxDigit = maxDigits[form.value.countryCode] || 11
    value = value.slice(0, maxDigit)

    let formattedValue = ''

    // Aplica máscara baseada no país selecionado
    if (form.value.countryCode === '+55') {
        // Brasil: (11) 99999-9999 ou (11) 9999-9999
        if (value.length >= 11) {
            formattedValue = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`
        } else if (value.length >= 10) {
            formattedValue = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6, 10)}`
        } else if (value.length >= 6) {
            formattedValue = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`
        } else if (value.length >= 2) {
            formattedValue = `(${value.slice(0, 2)}) ${value.slice(2)}`
        } else if (value.length >= 1) {
            formattedValue = `(${value}`
        }
    } else if (form.value.countryCode === '+1') {
        // EUA: (123) 456-7890
        if (value.length >= 10) {
            formattedValue = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`
        } else if (value.length >= 6) {
            formattedValue = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6)}`
        } else if (value.length >= 3) {
            formattedValue = `(${value.slice(0, 3)}) ${value.slice(3)}`
        } else if (value.length >= 1) {
            formattedValue = `(${value}`
        }
    } else {
        // Outros países: formato simples com espaços
        if (value.length >= 9) {
            formattedValue = `${value.slice(0, 3)} ${value.slice(3, 6)} ${value.slice(6)}`
        } else if (value.length >= 6) {
            formattedValue = `${value.slice(0, 3)} ${value.slice(3, 6)} ${value.slice(6)}`
        } else if (value.length >= 3) {
            formattedValue = `${value.slice(0, 3)} ${value.slice(3)}`
        } else {
            formattedValue = value
        }
    }

    form.value.phone = formattedValue || value
}

// Função para validar entrada (apenas números)
const validatePhoneInput = (event) => {
    const char = String.fromCharCode(event.which)
    if (!/[0-9]/.test(char)) {
        event.preventDefault()
    }
}

// Função para obter placeholder baseado no país
const getPhonePlaceholder = () => {
    const placeholders = {
        '+55': '(11) 99999-9999',
        '+1': '(123) 456-7890',
        '+44': '20 1234 5678',
        '+33': '1 23 45 67 89',
        '+49': '30 12345678',
        '+34': '91 123 45 67',
        '+39': '06 1234 5678',
        '+351': '21 123 4567',
        '+54': '11 1234-5678',
        '+52': '55 1234 5678'
    }
    return placeholders[form.value.countryCode] || '123456789'
}

// Função para obter tamanho máximo baseado no país
const getMaxLength = () => {
    const maxLengths = {
        '+55': 15, // (11) 99999-9999
        '+1': 14,  // (123) 456-7890
        '+44': 15, // 20 1234 5678
        '+33': 16, // 1 23 45 67 89
        '+49': 15, // 30 12345678
        '+34': 15, // 91 123 45 67
        '+39': 15, // 06 1234 5678
        '+351': 15, // 21 123 4567
        '+54': 15, // 11 1234-5678
        '+52': 15  // 55 1234 5678
    }
    return maxLengths[form.value.countryCode] || 15
}

// Watcher para limpar telefone quando mudar o país
watch(() => form.value.countryCode, () => {
    form.value.phone = ''
})

const getFloatingStyle = (index) => {
    const positions = [
        { top: '20%', left: '10%', animationDelay: '0s' },
        { top: '60%', left: '80%', animationDelay: '1s' },
        { top: '30%', left: '70%', animationDelay: '2s' },
        { top: '80%', left: '20%', animationDelay: '0.5s' },
        { top: '10%', left: '60%', animationDelay: '1.5s' },
        { top: '70%', left: '50%', animationDelay: '2.5s' }
    ]
    return positions[index - 1] || {}
}


</script>

<style scoped>
.apple-contact {
    background: transparent;
    min-height: 100vh;
}

.contact-hero {
    height: 95vh;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    overflow: hidden;
    background: transparent;
}

.hero-background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: transparent;
}

.floating-elements {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
}

.floating-element {
    position: absolute;
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, 
        var(--accent-orange), 
        var(--warm-orange), 
        rgba(255, 255, 255, 0.1));
    border-radius: 50%;
    opacity: 0.08;
    animation: float 12s ease-in-out infinite, holographicSpin 25s linear infinite;
    filter: blur(40px);
    box-shadow: 
        0 0 40px rgba(255, 107, 53, 0.2),
        0 0 80px rgba(255, 140, 66, 0.1);
}

@keyframes float {
    0%, 100% { 
        transform: translateY(0px) rotate(0deg);
    }
    25% { 
        transform: translateY(-20px) rotate(5deg);
    }
    50% { 
        transform: translateY(-10px) rotate(10deg);
    }
    75% { 
        transform: translateY(-30px) rotate(-5deg);
    }
}

@keyframes holographicSpin {
    0% { 
        transform: rotate(0deg) scale(1);
        filter: blur(60px) hue-rotate(0deg);
    }
    25% { 
        transform: rotate(90deg) scale(1.1);
        filter: blur(50px) hue-rotate(90deg);
    }
    50% { 
        transform: rotate(180deg) scale(1);
        filter: blur(60px) hue-rotate(180deg);
    }
    75% { 
        transform: rotate(270deg) scale(1.1);
        filter: blur(50px) hue-rotate(270deg);
    }
    100% { 
        transform: rotate(360deg) scale(1);
        filter: blur(60px) hue-rotate(360deg);
    }
}

.hero-content {
    position: relative;
    z-index: 2;
}

.contact-methods {
    background: transparent;
}

.contact-grid {
    gap: var(--spacing-3xl);
    align-items: start;
}

.contact-items {
    display: flex;
    flex-direction: column;
    gap: var(--spacing-xl);
}

.contact-item {
    display: flex;
    align-items: flex-start;
    gap: var(--spacing-md);
}

.contact-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, var(--apple-blue), var(--apple-purple));
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.25rem;
    flex-shrink: 0;
}

.contact-details h4 {
    color: var(--apple-text-primary);
    margin: 0;
}

.contact-details p {
    margin: 0;
    color: var(--apple-text-secondary);
}

.contact-details a {
    text-decoration: none;
    transition: color var(--transition-normal);
}

.contact-details a:hover {
    color: var(--apple-blue);
}

.contact-form-container {
    position: sticky;
    top: 100px;
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

/* Estilos específicos para todos os selects */
select.form-input {
    padding-right: calc(var(--spacing-xl) + 8px);
    /* Mais espaço para a seta */
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23AEAEB2' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right var(--spacing-md) center;
    background-size: 14px;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    cursor: pointer;
    /* Transição específica sem background-image */
    transition: border-color var(--transition-normal), background-color var(--transition-normal), box-shadow var(--transition-normal);
}

/* Seta azul quando em foco - sem transição */
select.form-input:focus {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23007AFF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6,9 12,15 18,9'%3e%3c/polyline%3e%3c/svg%3e");
}

/* Foco para inputs normais e textarea */
input.form-input:focus,
.form-textarea:focus {
    outline: none;
    border-color: var(--apple-blue);
    background: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
}

/* Foco específico para selects */
select.form-input:focus {
    outline: none;
    border-color: var(--apple-blue);
    background-color: rgba(255, 255, 255, 0.08);
    box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1);
}

.form-input::placeholder,
.form-textarea::placeholder {
    color: var(--apple-text-tertiary);
}

/* Estilos para as opções do select */
select.form-input option {
    background: var(--apple-dark-2);
    color: var(--apple-text-primary);
    padding: var(--spacing-sm);
}

/* Placeholder do select de assunto */
select.form-select option:first-child {
    color: var(--apple-text-tertiary);
}

select.form-select:invalid {
    color: var(--apple-text-tertiary);
}

select.form-select:valid {
    color: var(--apple-text-primary);
}

/* Opção selecionada */
select.form-input option:checked {
    background: var(--apple-blue);
    color: white;
}



.phone-input-container {
    display: flex;
    gap: var(--spacing-sm);
}

.country-select {
    min-width: 140px;
    flex-shrink: 0;
}

.phone-input {
    flex: 1;
}

.form-textarea {
    resize: vertical;
    min-height: 120px;
}

/* Holographic Buttons */
.btn-apple {
    position: relative;
    padding: 16px 32px;
    border: none;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    backdrop-filter: blur(20px);
    box-shadow: 
        0 8px 32px rgba(0, 0, 0, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.1);
}

.btn-apple::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, 
        transparent, 
        rgba(255, 255, 255, 0.2), 
        transparent);
    transition: left 0.6s;
}

.btn-apple:hover::before {
    left: 100%;
}

.btn-apple-primary {
    background: linear-gradient(135deg, 
        var(--accent-orange) 0%, 
        var(--warm-orange) 100%);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.btn-apple-primary:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 
        0 20px 40px rgba(255, 107, 53, 0.4),
        0 0 60px rgba(255, 140, 66, 0.3),
        inset 0 1px 0 rgba(255, 255, 255, 0.2);
}

.btn-apple-secondary {
    background: rgba(255, 255, 255, 0.05);
    color: var(--pure-white);
    border: 1px solid rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(20px);
}

.btn-apple-secondary:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 107, 53, 0.4);
    transform: translateY(-2px) scale(1.05);
    box-shadow: 
        0 20px 40px rgba(0, 0, 0, 0.3),
        0 0 40px rgba(255, 107, 53, 0.2);
}

.btn-apple:disabled {
    opacity: 0.6;
    cursor: not-allowed;
}

.btn-apple i {
    font-size: 1rem;
}

.social-section {
    background: transparent;
}

.social-links {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(258px, 1fr));
    gap: var(--spacing-lg);
    max-width: 800px;
    margin: 0 auto;
}

.social-link {
    display: flex;
    align-items: center;
    gap: var(--spacing-md);
    padding: var(--spacing-lg);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: var(--radius-lg);
    text-decoration: none;
    color: inherit;
    transition: all var(--transition-normal);
    backdrop-filter: blur(20px);
}

.social-link:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-4px);
    box-shadow: var(--shadow-lg);
}

.social-icon {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, var(--apple-blue), var(--apple-purple));
    border-radius: var(--radius-md);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 1.25rem;
    flex-shrink: 0;
}

.social-info {
    display: flex;
    flex-direction: column;
    align-items: baseline;
}

.social-info h4 {
    margin: 0 0 var(--spacing-xs) 0;
    color: var(--apple-text-primary);
}

.social-info p {
    margin: 0;
    color: var(--apple-text-secondary);
}

/* Success Modal */
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

/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
    transition: all var(--transition-normal);
}

.modal-enter-from,
.modal-leave-to {
    opacity: 0;
    transform: scale(0.9);
}

/* Estilos para autocomplete - mantém a aparência original */
.form-input:-webkit-autofill,
.form-input:-webkit-autofill:hover,
.form-input:-webkit-autofill:focus,
.form-input:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px transparent inset !important;
    -webkit-text-fill-color: var(--apple-text-primary) !important;
    background-color: rgba(255, 255, 255, 0.05) !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
    transition: background-color 5000s ease-in-out 0s;
}

.form-input:-webkit-autofill:focus {
    -webkit-box-shadow: 0 0 0 30px rgba(255, 255, 255, 0.08) inset !important;
    border-color: var(--apple-blue) !important;
    box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1), 0 0 0 30px rgba(255, 255, 255, 0.08) inset !important;
}

/* Para Firefox */
.form-input:-moz-autofill {
    background-color: rgba(255, 255, 255, 0.05) !important;
    color: var(--apple-text-primary) !important;
    border: 1px solid rgba(255, 255, 255, 0.2) !important;
}

.form-input:-moz-autofill:focus {
    background-color: rgba(255, 255, 255, 0.08) !important;
    border-color: var(--apple-blue) !important;
    box-shadow: 0 0 0 3px rgba(0, 122, 255, 0.1) !important;
}

/* Responsive Design */
@media (max-width: 1024px) {
    .contact-grid {
        gap: var(--spacing-xl);
    }

    .social-links {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .contact-grid {
        grid-template-columns: 1fr;
        gap: var(--spacing-2xl);
    }

    .contact-form-container {
        position: static;
    }

    .social-links {
        grid-template-columns: 1fr;
        gap: var(--spacing-md);
    }

    .social-link {
        flex-direction: column;
        text-align: center;
        padding: var(--spacing-xl);
        min-height: 140px;
        justify-content: center;
    }

    .social-info {
        align-items: center;
        text-align: center;
        margin-top: var(--spacing-sm);
    }

    .social-icon {
        margin-bottom: var(--spacing-sm);
    }
}

@media (max-width: 480px) {
    .apple-contact {
        padding-top: 80px;
        /* mantém a compensação do header fixo */
    }

    .container-apple {
        padding-left: var(--spacing-md);
        padding-right: var(--spacing-md);
    }

    .contact-hero {
        height: auto;
        min-height: 60vh;
        padding: var(--spacing-2xl) 0;
    }

    .hero-content {
        padding: 0 var(--spacing-md);
    }

    .contact-methods {
        padding: var(--spacing-xl) 0;
    }

    /* === AQUI ESTÁ O AJUSTE PRINCIPAL === */
    .contact-item {
        flex-direction: row;
        /* mantém lado a lado */
        align-items: center;
        /* centraliza verticalmente ícone e textos */
        text-align: left;
        /* alinha textos à esquerda */
        gap: var(--spacing-md);
    }

    .contact-icon {
        margin: 0;
        /* remove centralização forçada */
        width: 48px;
        height: 48px;
        flex-shrink: 0;
    }

    .contact-details h4,
    .contact-details p {
        margin: 0;
    }

    /* inputs de telefone continuam empilhando (ok para mobile) */
    .phone-input-container {
        flex-direction: column;
        gap: var(--spacing-sm);
    }

    .country-select {
        min-width: auto;
        width: 100%;
    }

    /* ajustes da seção social mantidos */
    .social-section {
        padding: var(--spacing-xl) 0;
    }

    .social-content {
        padding: 0 var(--spacing-md);
    }

    .social-links {
        gap: var(--spacing-sm);
    }

    .social-link {
        padding: var(--spacing-lg);
        min-height: 120px;
        justify-content: center;
    }

    .social-icon {
        margin-bottom: var(--spacing-sm);
    }

    .modal-overlay {
        padding: var(--spacing-md);
    }

    .modal-content {
        padding: var(--spacing-xl);
    }
}
</style>