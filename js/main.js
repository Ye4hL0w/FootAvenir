document.addEventListener('DOMContentLoaded', function() {
    // Gestion du menu burger
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinksItems = document.querySelectorAll('.nav-links a');

    // Toggle menu burger
    burgerMenu?.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.classList.toggle('menu-open');
    });

    // Fermer le menu lors du clic sur un lien
    navLinksItems.forEach(item => {
        item.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        });
    });

    window.addEventListener('scroll', () => {
        if (navLinks.classList.contains('active')) {
            burgerMenu.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });

    // Gestion du sélecteur de langue
    const languageSelector = document.querySelector('.language-selector');
    const languageOptions = languageSelector?.querySelectorAll('span');

    function updateContent(lang) {
        document.querySelectorAll('[data-translate]').forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[lang][key]) {
                element.textContent = translations[lang][key];
            }
        });
        
        // Mettre à jour la langue active
        languageOptions?.forEach(opt => {
            opt.classList.toggle('active', opt.textContent.toLowerCase() === lang.toLowerCase());
        });

        // Sauvegarder la préférence de langue
        localStorage.setItem('preferredLanguage', lang);
    }

    // Charger la langue préférée ou utiliser le français par défaut
    const savedLanguage = localStorage.getItem('preferredLanguage') || 'fr';
    updateContent(savedLanguage);

    languageOptions?.forEach(option => {
        option.addEventListener('click', () => {
            const lang = option.textContent.toLowerCase();
            updateContent(lang);
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

    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}); 