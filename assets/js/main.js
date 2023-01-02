window.addEventListener('DOMContentLoaded', (event) => {
    const toggler = document.getElementById('toggler');
    var darkTheme = window.matchMedia('(prefers-color-scheme: dark)');
    var currentTheme;

    // set the current theme
    if (localStorage.getItem('theme')) {
        currentTheme = localStorage.getItem('theme');
    } else if (darkTheme.matches) {
        currentTheme = 'dark';
    } else {
        currentTheme = 'light';
    }
    setTheme(currentTheme);

    toggler.addEventListener('click', function() {
        currentTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        themeTransition();
        setTheme(currentTheme);
    });

    darkTheme.addEventListener('change', function() {
        currentTheme = darkTheme.matches ? 'dark' : 'light';
        themeTransition();
        setTheme(currentTheme);
    });
});

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

function themeTransition() {
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 500)
}