import { ref, onMounted, onUnmounted } from 'vue'

export const useScrollAnimation = () => {
  const elements = ref([])
  
  const observeElements = () => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    )
    
    elements.value = document.querySelectorAll('.scroll-animate')
    elements.value.forEach((el) => observer.observe(el))
    
    return observer
  }
  
  onMounted(() => {
    observeElements()
  })
  
  return {
    elements
  }
}

export const useParallax = () => {
  const parallaxElements = ref([])
  
  const updateParallax = () => {
    const scrolled = window.pageYOffset
    
    parallaxElements.value.forEach((element) => {
      const rate = scrolled * -0.5
      element.style.transform = `translateY(${rate}px)`
    })
  }
  
  onMounted(() => {
    parallaxElements.value = document.querySelectorAll('.parallax-element')
    window.addEventListener('scroll', updateParallax)
  })
  
  onUnmounted(() => {
    window.removeEventListener('scroll', updateParallax)
  })
  
  return {
    parallaxElements
  }
}

export const useMouseTracker = () => {
  const mouseX = ref(0)
  const mouseY = ref(0)
  
  const updateMouse = (event) => {
    mouseX.value = event.clientX
    mouseY.value = event.clientY
  }
  
  onMounted(() => {
    window.addEventListener('mousemove', updateMouse)
  })
  
  onUnmounted(() => {
    window.removeEventListener('mousemove', updateMouse)
  })
  
  return {
    mouseX,
    mouseY
  }
}

export const useTypewriter = (text, speed = 100) => {
  const displayText = ref('')
  const isComplete = ref(false)
  let currentTimer = null
  
  const startTypewriter = () => {
    // Clear any existing timer
    if (currentTimer) {
      clearInterval(currentTimer)
      currentTimer = null
    }
    
    // Reset state
    displayText.value = ''
    isComplete.value = false
    
    // Get current text value (handle computed refs)
    let currentText = ''
    if (typeof text === 'function') {
      currentText = text()
    } else if (text && typeof text === 'object' && text.value !== undefined) {
      currentText = text.value
    } else {
      currentText = text || ''
    }
    
    if (!currentText) return
    
    let i = 0
    currentTimer = setInterval(() => {
      if (i < currentText.length) {
        displayText.value += currentText.charAt(i)
        i++
      } else {
        clearInterval(currentTimer)
        currentTimer = null
        isComplete.value = true
      }
    }, speed)
  }
  
  // Cleanup function
  const cleanup = () => {
    if (currentTimer) {
      clearInterval(currentTimer)
      currentTimer = null
    }
  }
  
  return {
    displayText,
    isComplete,
    startTypewriter,
    cleanup
  }
}

export const useCountUp = (target, duration = 2000) => {
  const current = ref(0)
  
  const startCountUp = () => {
    const start = Date.now()
    const end = start + duration
    
    const timer = setInterval(() => {
      const now = Date.now()
      const remaining = Math.max((end - now) / duration, 0)
      const progress = 1 - remaining
      
      current.value = Math.round(progress * target)
      
      if (progress === 1) {
        clearInterval(timer)
      }
    }, 16)
  }
  
  return {
    current,
    startCountUp
  }
}