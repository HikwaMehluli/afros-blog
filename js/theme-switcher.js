const themeToggle = document.getElementById('theme-toggle');

// Function to update theme
function toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const isCurrentlyDark = currentTheme === 'dark';

    if (isCurrentlyDark) {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('NewsPaperTheme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('NewsPaperTheme', 'dark');
    }
}

themeToggle.addEventListener('click', toggleTheme);