import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Header.css';

function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageDropdownOpen, setIsLanguageDropdownOpen] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setIsLanguageDropdownOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleLanguageDropdown = () => {
    setIsLanguageDropdownOpen(!isLanguageDropdownOpen);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <div className="logo-icon">
            <div className="logo-placeholder"></div>
          </div>
          <div className="logo-text">
            <div className="company-name">{t('company')}</div>
            <div className="slogan">{t('slogan')}</div>
          </div>
        </div>

        <div className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <div className="nav-item" onClick={() => {
            document.getElementById('why-choose').scrollIntoView({ behavior: 'smooth' });
          }}>
            {t('nav.why_choose')}
          </div>
          <div className="nav-item" onClick={() => window.location.href = '#team'}>
            {t('nav.team')}
          </div>
          <div className="nav-item" onClick={() => {
            document.getElementById('funding').scrollIntoView({ behavior: 'smooth' });
          }}>
            {t('nav.business')}
          </div>
          <div className="nav-item" onClick={() => window.location.href = '#dynamics'}>
            {t('nav.dynamics')}
          </div>
          <div className="nav-item" onClick={() => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
          }}>
            {t('nav.contact')}
          </div>
        </div>

        <div className="header-actions">
          <div className="language-switcher">
            <div className="language-dropdown">
              <div className="language-btn" onClick={toggleLanguageDropdown}>
                {i18n.language === 'zh' ? '切换语言' : 'Language'}
                <span className={`dropdown-arrow ${isLanguageDropdownOpen ? 'open' : ''}`}>▼</span>
              </div>
              {isLanguageDropdownOpen && (
                <div className="language-options">
                  <div 
                    className={`language-option ${i18n.language === 'zh' ? 'active' : ''}`}
                    onClick={() => changeLanguage('zh')}
                  >
                    中文
                  </div>
                  <div 
                    className={`language-option ${i18n.language === 'en' ? 'active' : ''}`}
                    onClick={() => changeLanguage('en')}
                  >
                    English
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="menu-toggle" onClick={toggleMenu}>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;