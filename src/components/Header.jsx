import React, { useState } from 'react';
import footerLogo from '../image/瘦金体logo@2x.png';
import { useTranslation } from 'react-i18next';
import './Header.css';

function Header() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="logo">
          <div className="logo-icon">
          <img src={footerLogo} alt="盈养科技" className='footer-img' />
          </div>
          <div className="logo-text">
            <div className="company-name">{t('company')}</div>
            <div className="slogan">{t('slogan')}</div>
          </div>
        </div>

        <div className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <div className="nav-item" onClick={() => {
            document.getElementById('nutrition-title').scrollIntoView({ behavior: 'smooth', block: 'start' });
            closeMenu(); // 添加关闭菜单
          }}>
            {t('nav.why_choose')}
          </div>
          <div className="nav-item" onClick={() => {
            window.location.href = '#team';
            closeMenu(); // 添加关闭菜单
          }}>
            {t('nav.team')}
          </div>
          <div className="nav-item" onClick={() => {
            document.getElementById('funding').scrollIntoView({ behavior: 'smooth' , block: 'start' });
            closeMenu(); // 添加关闭菜单
          }}>
            {t('nav.business')}
          </div>
          <div className="nav-item" onClick={() => {
            window.location.href = '#dynamics';
            closeMenu(); // 添加关闭菜单
          }}>
            {t('nav.dynamics')}
          </div>
          <div className="nav-item" onClick={() => {
            document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
            closeMenu(); // 添加关闭菜单
          }}>
            {t('nav.contact')}
          </div>
        </div>

        <div className="header-actions">
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