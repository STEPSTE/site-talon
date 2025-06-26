document.addEventListener('DOMContentLoaded', () => {
    // Select all images in the gallery
    const images = document.querySelectorAll('.img img');
    const lightbox = document.createElement('div');
    lightbox.classList.add('lightbox');
    document.body.appendChild(lightbox);

    // Create lightbox image
    const lightboxImg = document.createElement('img');
    lightbox.appendChild(lightboxImg);

    // Add click event to each image
    images.forEach(img => {
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightbox.style.display = 'flex';
        });
    });

    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', (e) => {
        if (e.target !== lightboxImg) {
            lightbox.style.display = 'none';
        }
    });

    // Smooth scroll for any anchor links (if added later)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});