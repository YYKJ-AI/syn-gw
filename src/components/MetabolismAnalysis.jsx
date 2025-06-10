import React from 'react';
import { useTranslation } from 'react-i18next';
import './MetabolismAnalysis.css';

function MetabolismAnalysis() {
  const { t } = useTranslation();

  return (
    <div className="metabolism-analysis">
      <div className="container">
        <div className="analysis-content">
          <h2 className="main-title">{t('metabolism.title')}</h2>
          <p className="subtitle">{t('metabolism.subtitle')}</p>
          
          <div className="analysis-diagram">
            {/* 左侧输入区域 */}
            <div className="input-section">
              <div className="input-container">
                <div className="input-module">
                  <div className="module-icon basic-icon">📊</div>
                  <span className="module-label">{t('metabolism.basicIndicators')}</span>
                </div>
                <div className="input-module">
                  <div className="module-icon nutrition-icon">📋</div>
                  <span className="module-label">{t('metabolism.nutritionLevel')}</span>
                </div>
                <div className="input-module">
                  <div className="module-icon physiology-icon">🔊</div>
                  <span className="module-label">{t('metabolism.physiologyInfo')}</span>
                </div>
              </div>
            </div>

            {/* 中间区域：采集数据 + AI + 疾病风险评估 */}
            <div className="center-flow">
              {/* 采集数据按钮 */}
              <div className="data-collection">
                <div className="data-button">
                  <div className="button-icon">⬇️</div>
                  <span className="button-label">{t('metabolism.dataInput')}</span>
                </div>
              </div>
              
              <div className="flow-arrow">→</div>
              
              {/* AI系统 */}
              <div className="ai-center">
                <div className="circuit-background"></div>
                <div className="ai-circle">
                  <span className="ai-text">AI</span>
                  <div className="ai-subtitle">{t('metabolism.aiSystem')}</div>
                </div>
              </div>
              
              <div className="flow-arrow">→</div>
              
              {/* 疾病风险评估按钮 */}
              <div className="risk-assessment">
                <div className="data-button">
                  <div className="button-icon">📊</div>
                  <span className="button-label">{t('metabolism.riskEvaluation')}</span>
                </div>
              </div>
            </div>

            {/* 右侧输出区域 */}
            <div className="output-section">
              <div className="output-container">
                <div className="health-indicators">
                  <div className="health-item">
                    <div className="health-icon heart-icon">❤️</div>
                    <span>{t('metabolism.heartDisease')}</span>
                  </div>
                  <div className="health-item">
                    <div className="health-icon respiratory-icon">🫁</div>
                    <span>{t('metabolism.respiratoryImmune')}</span>
                  </div>
                  <div className="health-item">
                    <div className="health-icon circulation-icon">🧠</div>
                    <span>{t('metabolism.circulationPain')}</span>
                  </div>
                  <div className="health-item">
                    <div className="health-icon gastric-icon">👍</div>
                    <span>{t('metabolism.gastricAcid')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MetabolismAnalysis;