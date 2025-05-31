document.addEventListener('DOMContentLoaded', function() {
    // Updates the copyright year in the footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // You can add more JavaScript here if needed, for example:
    // - Scroll animations
    // - Form validations (if using an external service)
    // - Image carousels for projects (would require a library or more code)
});