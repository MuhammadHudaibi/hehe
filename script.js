document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Fade-in effect for hero text
    const heroText = document.querySelector('.hero-text');
    setTimeout(() => {
        heroText.style.opacity = 1;
        heroText.style.transform = 'translateY(0)';
    }, 500);

    const backgroundMusic = document.getElementById('background-music');
    
    backgroundMusic.volume = 0.5;  // Set volume as required
    backgroundMusic.play().catch(error => {
        console.error('Music playback failed:', error);
    });
});
