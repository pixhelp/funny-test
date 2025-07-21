const anchors = document.querySelectorAll('.nav-anchor a[href^="#"]');
const sections = document.querySelectorAll('.section-container');

const observerSections = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            anchors.forEach(anchor => anchor.classList.remove('text-red-500'));
            sections.forEach(section => section.classList.remove('active'));

            document.querySelector(`.nav-anchor a[href="#${entry.target.id}"]`)
                ?.classList.add('text-red-500');
            entry.target.classList.add('active');
        }
    })
}, { threshold: 0.5, rootMargin: '0% 0% -70% 0%' });

sections.forEach(section => {
  observerSections.observe(section)
})
