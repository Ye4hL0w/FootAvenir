document.addEventListener('DOMContentLoaded', function() {
    // Gestion du menu burger
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    burgerMenu?.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Gestion du sélecteur de langue
    const languageSelector = document.querySelector('.language-selector');
    const languageOptions = languageSelector?.querySelectorAll('span');

    languageOptions?.forEach(option => {
        option.addEventListener('click', () => {
            languageOptions.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            // Ici, vous pouvez ajouter la logique pour changer la langue
        });
    });

    // Gestion du formulaire de contact
    const contactForm = document.querySelector('.contact-form');
    
    contactForm?.addEventListener('submit', (e) => {
        e.preventDefault();
        // Ici, vous pouvez ajouter la logique pour envoyer le formulaire
        alert('Message envoyé !');
        contactForm.reset();
    });

    // Animation des nombres pour les statistiques
    function animateNumbers() {
        const numbers = document.querySelectorAll('.stat-number');
        numbers.forEach(number => {
            const target = parseInt(number.getAttribute('data-target'));
            const increment = target / 100;
            let current = 0;

            const updateNumber = () => {
                if(current < target) {
                    current += increment;
                    number.textContent = Math.ceil(current);
                    requestAnimationFrame(updateNumber);
                } else {
                    number.textContent = target;
                }
            };

            updateNumber();
        });
    }

    // Observer pour déclencher l'animation des nombres
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if(entry.isIntersecting) {
                animateNumbers();
                observer.unobserve(entry.target);
            }
        });
    });

    const statsSection = document.querySelector('.stats-section');
    if(statsSection) {
        observer.observe(statsSection);
    }
}); 