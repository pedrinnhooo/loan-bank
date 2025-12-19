<template>
    <div class="orange-logo" :class="[`size-${size}`, `variant-${variant}`]">
        <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <!-- Círculo externo com gradiente -->
            <circle cx="30" cy="30" r="28" stroke="url(#orangeGradient)" stroke-width="2" fill="none" opacity="0.3"/>
            
            <!-- Hexágono central -->
            <path d="M30 8 L45 18 L45 42 L30 52 L15 42 L15 18 Z" 
                  :fill="variant === 'solid' ? '#ff6b35' : 'url(#orangeGradient)'" 
                  stroke="url(#orangeGradient)" 
                  stroke-width="1.5"/>
            
            <!-- Símbolo interno - Letra P estilizada -->
            <path d="M22 20 L22 40 M22 20 L32 20 C35 20 37 22 37 25 C37 28 35 30 32 30 L22 30" 
                  stroke="white" 
                  stroke-width="2.5" 
                  stroke-linecap="round" 
                  stroke-linejoin="round"/>
            
            <!-- Ponto decorativo -->
            <circle cx="40" cy="25" r="2" fill="url(#orangeGradient)" opacity="0.8"/>
            
            <!-- Gradientes -->
            <defs>
                <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style="stop-color:#ff6b35;stop-opacity:1" />
                    <stop offset="50%" style="stop-color:#ff8c42;stop-opacity:1" />
                    <stop offset="100%" style="stop-color:#ffa726;stop-opacity:1" />
                </linearGradient>
                
                <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge> 
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
            </defs>
        </svg>
        
        <!-- Efeito de brilho animado -->
        <div class="glow-effect" v-if="variant === 'glow'"></div>
    </div>
</template>

<script setup>
defineProps({
    size: {
        type: String,
        default: 'medium',
        validator: (value) => ['small', 'medium', 'large'].includes(value)
    },
    variant: {
        type: String,
        default: 'gradient',
        validator: (value) => ['solid', 'gradient', 'glow'].includes(value)
    }
})
</script>

<style scoped>
.orange-logo {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
}

.orange-logo svg {
    transition: all 0.3s ease;
    filter: drop-shadow(0 0 10px rgba(255, 107, 53, 0.3));
}

.orange-logo:hover svg {
    transform: scale(1.05);
    filter: drop-shadow(0 0 20px rgba(255, 107, 53, 0.5));
}

/* Tamanhos */
.size-small svg {
    width: 32px;
    height: 32px;
}

.size-medium svg {
    width: 48px;
    height: 48px;
}

.size-large svg {
    width: 64px;
    height: 64px;
}

/* Variantes */
.variant-glow svg {
    animation: logoGlow 3s ease-in-out infinite alternate;
}

.glow-effect {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 107, 53, 0.2) 0%, transparent 70%);
    border-radius: 50%;
    animation: pulseGlow 2s ease-in-out infinite;
    pointer-events: none;
}

@keyframes logoGlow {
    0% {
        filter: drop-shadow(0 0 10px rgba(255, 107, 53, 0.3));
    }
    100% {
        filter: drop-shadow(0 0 25px rgba(255, 107, 53, 0.6));
    }
}

@keyframes pulseGlow {
    0%, 100% {
        opacity: 0.5;
        transform: translate(-50%, -50%) scale(1);
    }
    50% {
        opacity: 0.8;
        transform: translate(-50%, -50%) scale(1.2);
    }
}

/* Responsivo */
@media (max-width: 768px) {
    .size-medium svg {
        width: 40px;
        height: 40px;
    }
    
    .size-large svg {
        width: 56px;
        height: 56px;
    }
}
</style>