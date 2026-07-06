(function () {
  const root = document.documentElement
  const themeToggle = document.querySelector('[data-theme-toggle]')
  const accentToggle = document.querySelector('[data-accent-toggle]')
  const accents = ['blue', 'green', 'rose']

  const savedTheme = localStorage.getItem('theme')
  const savedAccent = localStorage.getItem('accent')

  if (savedTheme) {
    root.dataset.theme = savedTheme
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    root.dataset.theme = 'dark'
  }

  if (savedAccent && savedAccent !== 'blue') {
    root.dataset.accent = savedAccent
  }

  themeToggle.addEventListener('click', function () {
    const nextTheme = root.dataset.theme === 'dark' ? 'light' : 'dark'
    root.dataset.theme = nextTheme
    localStorage.setItem('theme', nextTheme)
  })

  accentToggle.addEventListener('click', function () {
    const currentAccent = root.dataset.accent || 'blue'
    const currentIndex = accents.indexOf(currentAccent)
    const nextAccent = accents[(currentIndex + 1) % accents.length]

    if (nextAccent === 'blue') {
      delete root.dataset.accent
    } else {
      root.dataset.accent = nextAccent
    }

    localStorage.setItem('accent', nextAccent)
  })

  // Scroll-reveal animations (Apple-style), respecting reduced motion.
  const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
  ).matches

  const revealTargets = document.querySelectorAll('.reveal')

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach(function (el) {
      el.classList.add('is-visible')
    })
    return
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  )

  revealTargets.forEach(function (el) {
    observer.observe(el)
  })
})()
