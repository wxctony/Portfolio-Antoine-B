// Loader
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.display = 'none'; // Cache le loader
    }, 500); // Temps d'affichage du loader
});