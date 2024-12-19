// Loader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.display = 'none'; // Cache le loader
    }, 1000); // Temps d'affichage du loader (2 secondes)
});
