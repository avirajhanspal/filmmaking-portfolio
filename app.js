/* ==========================================================================
   MINIMALIST PORTFOLIO LOGIC - AVIRAJ HANSPAL
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    // 1. FILM GRID ITEMS
    const filmItems = document.querySelectorAll('.film-item');

    // 2. IMMERSIVE LIGHTBOX VIDEO PLAYER
    const lightbox = document.getElementById('video-lightbox');
    const lightboxVideo = document.getElementById('lightbox-video');
    const closeLightboxBtn = document.getElementById('close-lightbox-btn');

    // Open Lightbox
    if (filmItems.length > 0) {
        filmItems.forEach(item => {
            item.addEventListener('click', () => {
                const videoSrc = item.getAttribute('data-video-src');
                
                if (videoSrc) {
                    // Set video source
                    lightboxVideo.src = videoSrc;
                    
                    // Activate Lightbox
                    lightbox.style.display = 'flex';
                    // Trigger reflow for transition
                    void lightbox.offsetWidth;
                    lightbox.classList.add('active');
                    
                    // Play video
                    lightboxVideo.play().catch(err => {
                        console.log("Video playback error:", err);
                    });
                }
            });
        });
    }

    // Close Lightbox function
    function closeLightbox() {
        lightbox.classList.remove('active');
        lightboxVideo.pause();
        
        // Wait for transition before hiding
        setTimeout(() => {
            lightbox.style.display = 'none';
            lightboxVideo.src = "";
        }, 400);
    }

    if (closeLightboxBtn) {
        closeLightboxBtn.addEventListener('click', closeLightbox);
    }

    // Close Lightbox when clicking the background overlay
    if (lightbox) {
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightbox();
            }
        });
    }

    // Close Lightbox on Escape key
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

});
