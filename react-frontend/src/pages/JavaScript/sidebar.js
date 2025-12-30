document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-links");

    // 1. Toggle the menu when Hamburger is clicked
    hamburger.addEventListener("click", (e) => {
        // Stop the click from bubbling up to the document (prevents immediate closing)
        e.stopPropagation();

        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });

    // 2. Close menu when clicking ANYWHERE else on the document
    document.addEventListener("click", (e) => {
        // Check if the menu is currently open
        if (navMenu.classList.contains("active")) {
            // Check if the click happened INSIDE the menu
            // .contains() returns true if the clicked element is inside navMenu
            if (!navMenu.contains(e.target)) {
                hamburger.classList.remove("active");
                navMenu.classList.remove("active");
            }
        }
    });
});