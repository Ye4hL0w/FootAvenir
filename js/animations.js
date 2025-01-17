// Initialisation de AOS
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Animation de la navbar au scroll
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Animation des images au hover
document.querySelectorAll('.team-member img').forEach(img => {
    img.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.1) rotate(5deg)';
    });

    img.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1) rotate(0deg)';
    });
});

// Animation du texte de la section héro
const heroText = document.querySelector('.hero h1');
if(heroText) {
    const text = heroText.textContent;
    heroText.textContent = '';
    
    for(let i = 0; i < text.length; i++) {
        const span = document.createElement('span');
        span.textContent = text[i];
        span.style.animationDelay = `${i * 0.1}s`;
        heroText.appendChild(span);
    }
}

// Animation des cartes au scroll
const cards = document.querySelectorAll('.program-card');
const animateCards = () => {
    cards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('animate');
    });
};

if(cards.length > 0) {
    window.addEventListener('scroll', () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            if(cardTop < triggerBottom) {
                animateCards();
            }
        });
    });
} 