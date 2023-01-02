window.addEventListener('DOMContentLoaded', (event) => {
    const toggler = document.getElementById('toggler');
    var darkTheme = window.matchMedia('(prefers-color-scheme: dark)');
    var currentTheme;

    // set initial theme
    if (localStorage.getItem('theme')) {
        currentTheme = localStorage.getItem('theme');
    } else if (darkTheme.matches) {
        currentTheme = 'dark';
    } else {
        currentTheme = 'light';
    }
    setTheme(currentTheme);

    // button toggle theme change
    toggler.addEventListener('click', function() {
        currentTheme = document.documentElement.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
        setTheme(currentTheme);
    });

    // browser preference change
    darkTheme.addEventListener('change', function() {
        currentTheme = darkTheme.matches ? 'dark' : 'light';
        setTheme(currentTheme);
    });
});

function setTheme(theme) {
    // transition on theme change
    document.documentElement.classList.add('transition');
    window.setTimeout(() => {
        document.documentElement.classList.remove('transition');
    }, 700);

    // set the theme
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}