function openFullscreen(imgElement) {
    const fullscreenContainer = document.getElementById('fullscreen-container');
    const fullscreenImg = document.getElementById('fullscreen-img');
    
    fullscreenImg.src = imgElement.src;
    fullscreenContainer.style.display = 'flex';
}

function closeFullscreen() {
    document.getElementById('fullscreen-container').style.display = 'none';
}
