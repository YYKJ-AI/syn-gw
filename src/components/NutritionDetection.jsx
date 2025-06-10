import React from 'react';
import { useTranslation } from 'react-i18next';
import './NutritionDetection.css';

// 在这里引入你的图片
import vitaminImage from '../image/维生素活力提示@2x.png';
import mineralImage from '../image/矿物质活力提示@2x.png';
import microElementImage from '../image/微量元素活力提示@2x.png';

const NutritionDetection = () => {
  const { t } = useTranslation();

  return (
    <section className="nutrition-detection" id="why-choose">
      <div className="container">
        {/* 标题部分 */}
        <div className="detection-header">
          <h2 className="detection-title">{t('nutrition.title')}</h2>
          <p className="detection-subtitle">
            {t('nutrition.subtitle')}
          </p>
        </div>

        {/* 检测结果展示 - 三张图片 */}
        <div className="detection-results">
          <div className="result-image-container">
          <img src={microElementImage} alt={t('nutrition.panels.activity')} className="result-image" />
          </div>
          
          <div className="result-image-container">
          <img src={vitaminImage} alt={t('nutrition.panels.vitamin')} className="result-image" />
         
            {/* <div className="image-placeholder">{t('nutrition.panels.mineral')}</div> */}
          </div>
          
          <div className="result-image-container">
          <img src={mineralImage} alt={t('nutrition.panels.mineral')} className="result-image" />
            {/* <div className="image-placeholder">{t('nutrition.panels.activity')}</div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NutritionDetection;