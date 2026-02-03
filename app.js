/* ========= DARK MODE ========= */
const toggle = document.getElementById('theme-toggle');
const root = document.documentElement;

const savedTheme = localStorage.getItem('theme');
if (savedTheme) root.dataset.theme = savedTheme;

toggle?.addEventListener('click', () => {
  const theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  root.dataset.theme = theme;
  localStorage.setItem('theme', theme);
});

/* ========= CONFIG (ZACHOWANE 1:1) ========= */
const defaultConfig = {
  company_name: 'Zielony Ogród',
  hero_title: 'Twój wymarzony trawnik zaczyna się tutaj',
  hero_subtitle: 'Zakładanie trawników, systemy nawadniania i profesjonalne koszenie.',
  phone_number: '+48 123 456 789',
  email_address: 'kontakt@zielonyogrod.pl',
  font_size: 16
};

async function onConfigChange(cfg) {
  document.getElementById('nav-company-name').textContent = cfg.company_name;
  document.getElementById('footer-company-name').textContent = cfg.company_name;
  document.getElementById('hero-title').textContent = cfg.hero_title;
  document.getElementById('hero-subtitle').textContent = cfg.hero_subtitle;

  document.documentElement.style.fontSize = `${cfg.font_size}px`;
}

if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange
  });
}

/* ========= SMOOTH SCROLL ========= */
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({
      behavior: 'smooth'
    });
  });
});