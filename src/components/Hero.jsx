import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './Hero.css';
import productImage from '../image/视频图@2x.png';
import productImage1 from '../image/视频图1@2x.png';
import productImage2 from '../image/视频图2@2x.png';
import productImage3 from '../image/视频图3@2x.png';
import productImage4 from '../image/视频图4@2x.png';
import iconGlucose from '../image/图标-无创监测数据@2x.png';
import iconDataManagement from '../image/图标-具身时序数据管理@2x.png';
import iconDataVerification from '../image/图标-数据验证营养效果@2x.png';
import iconAINutrition from '../image/图标-AI评估营养波动@2x.png';
import iconPersonalized from '../image/图标-个性定制营养纠偏@2x.png';

function Hero() {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // 轮播图片数组
  const carouselImages = [
    productImage1,
    productImage2,
    productImage3,
    productImage4
  ];

  // 自动轮播效果
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000); // 每3秒切换一次

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-image">
            <div className="carousel-container">
              {carouselImages.map((image, index) => (
                <img 
                  key={index}
                  src={image} 
                  alt={`盈养科技产品${index + 1}`} 
                  className={`product-main-image ${index === currentSlide ? 'active' : ''}`} 
                />
              ))}
              
              <div className="carousel-indicators">
                {carouselImages.map((_, index) => (
                  <span 
                    key={index} 
                    className={`indicator ${index === currentSlide ? 'active' : ''}`}
                    onClick={() => setCurrentSlide(index)}
                  ></span>
                ))}
              </div>
            </div>
          </div>
          
          <div className="hero-text">
            <div className="hero-company">{t('hero.companyName')}</div>
            <div className="hero-title">{t('hero.title')}</div>
            
            <div className="hero-stats">
              <div className="stat">
                <div className="stat-number">5</div>
                <div className="stat-label">{t('hero.stats.modules')}</div>
              </div>
              <div className="stat">
                <div className="stat-number">90</div>
                <div className="stat-label">{t('hero.stats.innovation')}</div>
              </div>
              <div className="stat">
                <div className="stat-number">82</div>
                <div className="stat-label">{t('hero.stats.projects')}</div>
              </div>
            </div>

            <div className="hero-features">
              <div className="feature">
                <div className="feature-icon">
                  <img src={iconGlucose} alt="无创血糖检测" />
                </div>
                <div className="feature-text">{t('hero.features.feature1')}</div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <img src={iconDataManagement} alt="具身对话数据管理" />
                </div>
                <div className="feature-text">{t('hero.features.feature2')}</div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <img src={iconDataVerification} alt="数据验证监界效果" />
                </div>
                <div className="feature-text">{t('hero.features.feature3')}</div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <img src={iconAINutrition} alt="AI评估营养效动" />
                </div>
                <div className="feature-text">{t('hero.features.feature4')}</div>
              </div>
              <div className="feature">
                <div className="feature-icon">
                  <img src={iconPersonalized} alt="个性定制营养机调" />
                </div>
                <div className="feature-text">{t('hero.features.feature5')}</div>
              </div>
            </div>

            <div className="hero-description">{t('hero.description')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;