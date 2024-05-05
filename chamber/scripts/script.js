document.addEventListener("DOMContentLoaded", function() {
    var lastModified = document.lastModified;
    var lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        lastModifiedElement.textContent = lastModified;
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const toggle = document.getElementById('toggle');
    const menu = document.querySelector('.menu');

    toggle.addEventListener('change', function () {
        if (toggle.checked) {
            menu.classList.add('active');
        } else {
            menu.classList.remove('active');
        }
    });
});
