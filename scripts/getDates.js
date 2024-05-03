document.addEventListener('DOMContentLoaded', function () {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
    
    const yearSpan = document.querySelectorAll('.current-year');
    yearSpan.forEach(span => {
        span.textContent = currentYear;
    });

    const lastModifiedSpan = document.querySelectorAll('.last-modified');
    lastModifiedSpan.forEach(span => {
        span.textContent = lastModified;
    });
});
