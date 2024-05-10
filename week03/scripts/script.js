document.addEventListener("DOMContentLoaded", function() {
    // Lazy load images
    let lazyImages = document.querySelectorAll('.lazy');

    const lazyLoad = (target) => {
        const io = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const src = img.getAttribute('data-src');
                    img.setAttribute('src', src);
                    img.classList.remove('lazy');
                    observer.disconnect();
                }
            });
        });

        io.observe(target);
    };

    lazyImages.forEach(lazyLoad);

    // Update last modified date
    document.getElementById('lastModified').innerText = document.lastModified;
});
