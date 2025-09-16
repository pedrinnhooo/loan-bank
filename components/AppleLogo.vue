<template>
  <div class="code-logo" :class="{ 'small': size === 'small', 'large': size === 'large' }">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="codeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" :style="`stop-color: ${colors.primary}; stop-opacity: 1`" />
          <stop offset="50%" :style="`stop-color: ${colors.middle}; stop-opacity: 1`" />
          <stop offset="100%" :style="`stop-color: ${colors.secondary}; stop-opacity: 1`" />
        </linearGradient>
        <filter id="codeGlow">
          <feGaussianBlur stdDeviation="1.5" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <!-- Code-themed design -->
      <g fill="url(#codeGradient)" filter="url(#codeGlow)">
        <!-- Background circle -->
        <circle 
          cx="50" 
          cy="50" 
          r="45" 
          fill="none" 
          stroke="url(#codeGradient)" 
          stroke-width="1.5"
          opacity="0.3"
        />
        
        <!-- Left curly brace { -->
        <path 
          d="M25 30 Q20 30 20 35 L20 42 Q20 47 15 47 Q20 47 20 52 L20 59 Q20 64 25 64" 
          fill="none" 
          stroke="url(#codeGradient)" 
          stroke-width="3"
          stroke-linecap="round"
          opacity="0.9"
        />
        
        <!-- Right curly brace } -->
        <path 
          d="M75 30 Q80 30 80 35 L80 42 Q80 47 85 47 Q80 47 80 52 L80 59 Q80 64 75 64" 
          fill="none" 
          stroke="url(#codeGradient)" 
          stroke-width="3"
          stroke-linecap="round"
          opacity="0.9"
        />
        
        <!-- Code lines inside -->
        <line x1="35" y1="38" x2="55" y2="38" stroke="url(#codeGradient)" stroke-width="2" opacity="0.8"/>
        <line x1="35" y1="47" x2="65" y2="47" stroke="url(#codeGradient)" stroke-width="2" opacity="0.8"/>
        <line x1="35" y1="56" x2="50" y2="56" stroke="url(#codeGradient)" stroke-width="2" opacity="0.8"/>
        
        <!-- Angle brackets < > -->
        <path 
          d="M40 25 L30 35 L40 45" 
          fill="none" 
          stroke="url(#codeGradient)" 
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          opacity="0.7"
        />
        <path 
          d="M60 25 L70 35 L60 45" 
          fill="none" 
          stroke="url(#codeGradient)" 
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
          opacity="0.7"
        />
        
        <!-- Center dot (cursor) -->
        <circle 
          cx="50" 
          cy="47" 
          r="2" 
          fill="url(#codeGradient)"
          opacity="1"
        >
          <animate attributeName="opacity" values="1;0.3;1" dur="1.5s" repeatCount="indefinite"/>
        </circle>
      </g>
    </svg>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'medium',
    validator: (value) => ['small', 'medium', 'large'].includes(value)
  },
  variant: {
    type: String,
    default: 'blue',
    validator: (value) => ['blue', 'purple', 'gradient'].includes(value)
  }
})

const colors = computed(() => {
  switch (props.variant) {
    case 'purple':
      return {
        primary: '#AF52DE',
        middle: '#5856D6',
        secondary: '#007AFF'
      }
    case 'gradient':
      return {
        primary: '#007AFF',
        middle: '#5AC8FA',
        secondary: '#5856D6'
      }
    default: // blue (foco nas cores do site)
      return {
        primary: '#007AFF',
        middle: '#0056CC',
        secondary: '#5AC8FA'
      }
  }
})
</script>

<style scoped>
.code-logo {
  display: inline-block;
  width: 32px;
  height: 32px;
  transition: all var(--transition-normal);
}

.code-logo.small {
  width: 24px;
  height: 24px;
}

.code-logo.large {
  width: 48px;
  height: 48px;
}

.code-logo svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 2px 4px rgba(0, 122, 255, 0.2));
}

.code-logo:hover {
  transform: scale(1.05);
}

.code-logo:hover svg {
  filter: drop-shadow(0 4px 8px rgba(0, 122, 255, 0.4));
}

/* Animação sutil no hover */
.code-logo:hover svg circle {
  animation-duration: 0.8s !important;
}
</style>