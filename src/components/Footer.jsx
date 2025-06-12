import React from 'react';
import { useTranslation } from 'react-i18next';
import './Footer.css';
import footerLogo from '../image/瘦金体logo@2x.png';
import xiaohongshuIcon from '../image/小红书@2x.png';
import bilibiliIcon from '../image/b站@2x.png';
import wechatIcon from '../image/微信公众号@2x.png';
import videoIcon from '../image/视频号@2x.png';
import douyinIcon from '../image/抖音@2x.png';

function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={footerLogo} alt="盈养科技" className='footer-img' />
          </div>
          
          <div className="footer-info">
            <div className="info-item">
              <h3>E-MAIL</h3>
              <p>电子邮箱：info@yingyang.online</p>
            </div>
            
            <div className="info-item">
              <h3>电话</h3>
              <p>服务热线：400-888-3376</p>
            </div>
            
            <div className="info-item">
              <h3>地址</h3>
              <p>地址：北京市石龙经济开发区产业孵化中心</p>
            </div>
            <div className="info-item">
              <h3>关注我们</h3>
              <div className="social-icons">
                <img src={xiaohongshuIcon} alt="小红书" />
                <img src={bilibiliIcon} alt="B站" />
                <img src={wechatIcon} alt="微信公众号" />
                <img src={videoIcon} alt="视频号" />
                <img src={douyinIcon} alt="抖音" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Copyright ©  2025 . 保留所有权利. 京ICP备2024102634号-2 北京盈养科技有限公司 </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;