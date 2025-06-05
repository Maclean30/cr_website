// Simple animated photo gallery for Crunch Republic

document.addEventListener('DOMContentLoaded', function () {
    const galleryTrack = document.querySelector('.gallery-track');
    const images = document.querySelectorAll('.gallery-track img');
    const btnLeft = document.querySelector('.gallery-btn.left');
    const btnRight = document.querySelector('.gallery-btn.right');

    if (!galleryTrack || images.length === 0) return;

    let currentIndex = 0;
    const imageWidth = images[0].clientWidth + 15; // image + margin-right

    function updateGallery() {
        galleryTrack.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
    }

    btnLeft.addEventListener('click', function () {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
        updateGallery();
    });

    btnRight.addEventListener('click', function () {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateGallery();
    });

    // Auto-slide every 4 seconds
    setInterval(function () {
        currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
        updateGallery();
    }, 4000);

    // Make responsive
    window.addEventListener('resize', () => {
        updateGallery();
    });
});