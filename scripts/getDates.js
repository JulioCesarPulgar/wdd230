document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const lastModified = document.lastModified;
  
    // Use a single querySelectorAll and loop through the results
    const dynamicSpans = document.querySelectorAll('.current-year, .last-modified');
  
    dynamicSpans.forEach(span => {
      if (span.classList.contains('current-year')) {
        span.textContent = currentYear;
      } else {
        span.textContent = lastModified;
      }
    });
  });