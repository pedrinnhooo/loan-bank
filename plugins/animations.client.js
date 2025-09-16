export default defineNuxtPlugin(() => {
  // Smooth scrolling polyfill for older browsers
  if (typeof window !== 'undefined') {
    // Add smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth'
    
    // Initialize scroll animations observer
    const observeScrollAnimations = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('in-view')
              // Unobserve after animation to improve performance
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
        }
      )
      
      // Observe all elements with scroll-animate class
      const elements = document.querySelectorAll('.scroll-animate')
      elements.forEach((el) => observer.observe(el))
    }
    
    // Initialize on DOM ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', observeScrollAnimations)
    } else {
      observeScrollAnimations()
    }
    
    // Re-initialize on route changes
    window.addEventListener('nuxt:page:finish', observeScrollAnimations)
  }
})