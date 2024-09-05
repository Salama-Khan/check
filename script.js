// script.js

let currentPage = 1;
const totalPages = 4;

// Function to show the current page with fade effect
function showPage(page) {
    // Remove "active" class from all pages first
    for (let i = 1; i <= totalPages; i++) {
        const pageElement = document.getElementById(`page-${i}`);
        pageElement.classList.remove('active');
        pageElement.style.display = 'none';  // Ensures hidden pages don't take up space
    }

    // After 50ms, show the new page with the "active" class to trigger opacity transition
    const newPage = document.getElementById(`page-${page}`);
    newPage.style.display = 'flex';
    setTimeout(() => newPage.classList.add('active'), 50);

    currentPage = page;
}

// Handle next and previous buttons
document.getElementById('next-1').addEventListener('click', () => showPage(2));
document.getElementById('next-2').addEventListener('click', () => showPage(3));
document.getElementById('next-3').addEventListener('click', () => showPage(4));

document.getElementById('prev-2').addEventListener('click', () => showPage(1));
document.getElementById('prev-3').addEventListener('click', () => showPage(2));
document.getElementById('prev-4').addEventListener('click', () => showPage(3));

// Arrow key navigation
document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowRight' && currentPage < totalPages) {
        showPage(currentPage + 1);
    } else if (event.key === 'ArrowLeft' && currentPage > 1) {
        showPage(currentPage - 1);
    }
});

// Form submission
document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted successfully!');
});
