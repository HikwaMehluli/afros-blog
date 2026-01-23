let navElement, mainElement, headerElement, overlayElement, menuTrigger;

function createOverlay() {
    // Create overlay element if it doesn't exist
    let overlay = document.querySelector('.content-overlay');
    if (!overlay) {
        overlay = document.createElement('div');
        overlay.classList.add('content-overlay');
        document.body.appendChild(overlay);
    }
    return overlay;
}

function initNavigation() {
    // Get DOM elements
    navElement = document.getElementById("sideMenu");
    mainElement = document.querySelector("main");
    headerElement = document.querySelector("header");
    menuTrigger = document.querySelector('.menu-trigger');
    overlayElement = createOverlay();

    // Add event listeners for menu trigger
    if (menuTrigger) {
        menuTrigger.addEventListener('click', toggleNav);
    }

    // Add event listener for close button inside navigation
    const closeMenuTrigger = document.querySelector('.close-menu-trigger');
    if (closeMenuTrigger) {
        closeMenuTrigger.addEventListener('click', closeNav);
    }

    // Close menu when clicking on overlay
    overlayElement.addEventListener('click', closeNav);
}

function openNav() {
    // Add active class for slide effect
    navElement.classList.add('active');

    // Toggle menu trigger to show X
    menuTrigger.classList.add('active');

    // Add class to body to indicate nav is open
    document.body.classList.add('nav-open');

    // Show overlay
    overlayElement.classList.add('active');

    // Apply blur effect to main and header
    mainElement.classList.add('blurred');
    headerElement.classList.add('blurred');

    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden';
}

function closeNav() {
    // Remove active class for slide effect
    navElement.classList.remove('active');

    // Remove active class from menu trigger to show hamburger
    menuTrigger.classList.remove('active');

    // Remove class from body to indicate nav is closed
    document.body.classList.remove('nav-open');

    // Hide overlay
    overlayElement.classList.remove('active');

    // Remove blur effect from main and header
    mainElement.classList.remove('blurred');
    headerElement.classList.remove('blurred');

    // Re-enable body scroll when menu is closed
    document.body.style.overflow = '';
}

function toggleNav() {
    if (navElement.classList.contains('active')) {
        closeNav();
    } else {
        openNav();
    }
}

// Initialize navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', initNavigation);