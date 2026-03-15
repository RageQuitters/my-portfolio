import { onMounted } from 'vue'

/**
 * Attaches an IntersectionObserver to all .fade-in elements,
 * adding the .visible class when they enter the viewport.
 * Call once in the root App component.
 */
export function useScrollReveal() {
  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )

    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el))
  })
}
