import React from 'react';
import { useTranslation } from 'react-i18next';
import './Research.css';
import coreResult1 from '../image/图-核心成果1@2x.png';
import coreResult2 from '../image/图-核心成果2@2x.png';
import paperImage from '../image/论文图片@2x.png';

function Research() {
  const { t } = useTranslation();

  return (
    <div className="research">
      <div className="container">
        <div className="research-header">
          <h2 className="research-title">{t('research.title')}</h2>
          <p className="research-subtitle">{t('research.subtitle')}</p>
        </div>
        
        <div className="research-content">
          {/* 左侧：核心成果1和2 */}
          <div className="research-left">
            <div className="core-results-container">
              {/* 核心成果1 - 使用特定样式类 */}
              <div className="core-result-item core-result-1">
                <div className="core-result-header">
                  <div className="core-result-label">{t('research.coreIssue1.title')}</div>
                  <div className="core-result-description">{t('research.coreIssue1.description')}</div>
                </div>
                <div className="core-result-visual core-result-1-visual">
                  <img src={coreResult1} alt="核心成果1" />
                </div>
              </div>
              
              {/* 核心成果2 - 使用特定样式类 */}
              <div className="core-result-item core-result-2">
                <div className="core-result-header">
                  <div className="core-result-label">{t('research.coreIssue2.title')}</div>
                  <div className="core-result-description">{t('research.coreIssue2.description')}</div>
                </div>
                <div className="core-result-visual core-result-2-visual">
                  <img src={coreResult2} alt="核心成果2" />
                </div>
                <p className="innovation-text">{t('research.innovation')}</p>
              </div>
            
            </div>
            
            {/* <div className="innovation-summary">
              <p>{t('research.innovation')}</p>
            </div> */}
          </div>
          
          {/* 右侧：论文支撑 */}
          <div className="research-right">
            <div className="evidence-section">
              <div className="paper-display">
                <img src={paperImage} alt="科研论文" />
              </div>
              <div className="evidence-content">
                <h3 className="evidence-title">{t('research.evidenceTitle')}</h3>
                <div className="evidence-items">
                  <div className="evidence-item">
                    <div className="evidence-quote">{t('research.evidence1')}</div>
                    <div className="evidence-source">{t('research.citation1')}</div>
                  </div>
                  <div className="evidence-item">
                    <div className="evidence-quote">{t('research.evidence2')}</div>
                    <div className="evidence-source">{t('research.citation2')}</div>
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

export default Research;