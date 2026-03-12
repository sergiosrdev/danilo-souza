const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const year = document.getElementById('year');
const themeToggle = document.getElementById('theme-toggle');
const root = document.documentElement;
const themeColorMeta = document.querySelector('meta[name="theme-color"]');
const THEME_STORAGE_KEY = 'danilo-souza-theme';

if (year) {
  year.textContent = new Date().getFullYear();
}

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);

  if (themeToggle) {
    const isDark = theme === 'dark';
    themeToggle.textContent = isDark ? 'Tema claro' : 'Tema escuro';
    themeToggle.setAttribute('aria-pressed', String(isDark));
  }

  if (themeColorMeta) {
    themeColorMeta.setAttribute('content', theme === 'dark' ? '#0d2f27' : '#4f6770');
  }
}

if (themeToggle) {
  let storedTheme = null;

  try {
    storedTheme = localStorage.getItem(THEME_STORAGE_KEY);
  } catch (_) {
    storedTheme = null;
  }

  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = storedTheme === 'dark' || storedTheme === 'light'
    ? storedTheme
    : (prefersDark ? 'dark' : 'light');

  applyTheme(initialTheme);

  themeToggle.addEventListener('click', () => {
    const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);

    try {
      localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    } catch (_) {
      // Ignore storage errors in private or restricted contexts.
    }
  });
}

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
