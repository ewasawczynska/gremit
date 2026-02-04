const defaultConfig = {
  company_name: 'GREMIT Artur Dewerenda',
  hero_title: 'Twój wymarzony trawnik zaczyna się tutaj',
  hero_subtitle: 'Zakładanie trawników, systemy nawadniania i profesjonalne koszenie. Zadbamy o Twój ogród jak o własny.',
  service1_title: 'Zakładanie trawników',
  service2_title: 'Systemy nawadniania',
  service3_title: 'Koszenie i pielęgnacja',
  phone_number: '+48 UZUPELNIC',
  email_address: 'UZUPELNIC',
  primary_color: '#16a34a',
  background_color: '#fefefe',
  surface_color: '#ffffff',
  text_color: '#1e293b',
  secondary_text_color: '#64748b',
  font_family: 'Source Sans 3',
  font_size: 16
};

let config = { ...defaultConfig };

async function onConfigChange(cfg) {
  config = { ...defaultConfig, ...cfg };
  
  // Update company name
  const navCompanyName = document.getElementById('nav-company-name');
  const footerCompanyName = document.getElementById('footer-company-name');
  if (navCompanyName) navCompanyName.textContent = config.company_name;
  if (footerCompanyName) footerCompanyName.textContent = config.company_name;
  
  // Update hero section
  const heroTitle = document.getElementById('hero-title');
  const heroSubtitle = document.getElementById('hero-subtitle');
  if (heroTitle) heroTitle.textContent = config.hero_title;
  if (heroSubtitle) heroSubtitle.textContent = config.hero_subtitle;
  
  // Update service titles
  const service1 = document.getElementById('service1-title');
  const service2 = document.getElementById('service2-title');
  const service3 = document.getElementById('service3-title');
  if (service1) service1.textContent = config.service1_title;
  if (service2) service2.textContent = config.service2_title;
  if (service3) service3.textContent = config.service3_title;
  
  // Update contact info
  const contactPhone = document.getElementById('contact-phone');
  const contactEmail = document.getElementById('contact-email');
  if (contactPhone) contactPhone.textContent = config.phone_number;
  if (contactEmail) contactEmail.textContent = config.email_address;
  
  // Apply colors
  const appWrapper = document.getElementById('app-wrapper');
  if (appWrapper) appWrapper.style.backgroundColor = config.background_color;
  
  // Apply font
  const fontFamily = `${config.font_family}, Source Sans 3, sans-serif`;
  document.body.style.fontFamily = fontFamily;
  
  // Apply font size scaling
  const baseSize = config.font_size;
  document.documentElement.style.fontSize = `${baseSize}px`;
}

function mapToCapabilities(cfg) {
  return {
    recolorables: [
      {
        get: () => cfg.background_color || defaultConfig.background_color,
        set: (value) => {
          cfg.background_color = value;
          window.elementSdk.setConfig({ background_color: value });
        }
      },
      {
        get: () => cfg.surface_color || defaultConfig.surface_color,
        set: (value) => {
          cfg.surface_color = value;
          window.elementSdk.setConfig({ surface_color: value });
        }
      },
      {
        get: () => cfg.text_color || defaultConfig.text_color,
        set: (value) => {
          cfg.text_color = value;
          window.elementSdk.setConfig({ text_color: value });
        }
      },
      {
        get: () => cfg.primary_color || defaultConfig.primary_color,
        set: (value) => {
          cfg.primary_color = value;
          window.elementSdk.setConfig({ primary_color: value });
        }
      },
      {
        get: () => cfg.secondary_text_color || defaultConfig.secondary_text_color,
        set: (value) => {
          cfg.secondary_text_color = value;
          window.elementSdk.setConfig({ secondary_text_color: value });
        }
      }
    ],
    borderables: [],
    fontEditable: {
      get: () => cfg.font_family || defaultConfig.font_family,
      set: (value) => {
        cfg.font_family = value;
        window.elementSdk.setConfig({ font_family: value });
      }
    },
    fontSizeable: {
      get: () => cfg.font_size || defaultConfig.font_size,
      set: (value) => {
        cfg.font_size = value;
        window.elementSdk.setConfig({ font_size: value });
      }
    }
  };
}

function mapToEditPanelValues(cfg) {
  return new Map([
    ['company_name', cfg.company_name || defaultConfig.company_name],
    ['hero_title', cfg.hero_title || defaultConfig.hero_title],
    ['hero_subtitle', cfg.hero_subtitle || defaultConfig.hero_subtitle],
    ['service1_title', cfg.service1_title || defaultConfig.service1_title],
    ['service2_title', cfg.service2_title || defaultConfig.service2_title],
    ['service3_title', cfg.service3_title || defaultConfig.service3_title],
    ['phone_number', cfg.phone_number || defaultConfig.phone_number],
    ['email_address', cfg.email_address || defaultConfig.email_address]
  ]);
}

// Initialize Element SDK
if (window.elementSdk) {
  window.elementSdk.init({
    defaultConfig,
    onConfigChange,
    mapToCapabilities,
    mapToEditPanelValues
  });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});