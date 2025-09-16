<template>
  <div class="apple-logo" :class="{ 'small': size === 'small', 'large': size === 'large' }">
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" :style="`stop-color: ${colors.primary}; stop-opacity: 1`" />
          <stop offset="50%" :style="`stop-color: ${colors.middle}; stop-opacity: 1`" />
          <stop offset="100%" :style="`stop-color: ${colors.secondary}; stop-opacity: 1`" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
          <feMerge> 
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>
      
      <!-- Modern geometric design -->
      <g fill="url(#logoGradient)" filter="url(#glow)">
        <!-- Main hexagon -->
        <polygon 
          points="50,15 70,30 70,60 50,75 30,60 30,30" 
          fill="none" 
          stroke="url(#logoGradient)" 
          stroke-width="2"
          opacity="0.8"
        />
        
        <!-- Inner triangle -->
        <polygon 
          points="50,25 62,45 38,45" 
          fill="url(#logoGradient)"
          opacity="0.9"
        />
        
        <!-- Bottom triangle -->
        <polygon 
          points="50,55 62,65 38,65" 
          fill="url(#logoGradient)"
          opacity="0.7"
        />
        
        <!-- Center dot -->
        <circle 
          cx="50" 
          cy="50" 
          r="2" 
          fill="url(#logoGradient)"
          opacity="1"
        />
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
        middle: '#FF2D92',
        secondary: '#FF9500'
      }
    case 'gradient':
      return {
        primary: '#007AFF',
        middle: '#5856D6',
        secondary: '#AF52DE'
      }
    default: // blue
      return {
        primary: '#007AFF',
        middle: '#5AC8FA',
        secondary: '#34C759'
      }
  }
})
</script>

<style scoped>
.apple-logo {
  display: inline-block;
  width: 32px;
  height: 32px;
  transition: all var(--transition-normal);
}

.apple-logo.small {
  width: 24px;
  height: 24px;
}

.apple-logo.large {
  width: 48px;
  height: 48px;
}

.apple-logo svg {
  width: 100%;
  height: 100%;
  filter: drop-shadow(0 2px 4px rgba(0, 122, 255, 0.2));
}

.apple-logo:hover {
  transform: scale(1.05);
}

.apple-logo:hover svg {
  filter: drop-shadow(0 4px 8px rgba(0, 122, 255, 0.3));
}
</style>