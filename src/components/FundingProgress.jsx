import React from 'react';
import { useTranslation } from 'react-i18next';
import './FundingProgress.css';
import fundingBgImage from '../image/融资底图@2x.jpg';
import stepsImage from '../image/阶梯@2x.png';

function FundingProgress() {
  const { t } = useTranslation();

  return (
    <div className="funding-progress">
      <div className="funding-background"  style={{ backgroundImage: `url(${fundingBgImage})` }}>
       
          <div className="funding-content">
            <h2 className="funding-title"  id="funding">融资进度</h2>
            
            <div className="funding-diagram">
              <div className="steps-container">
                <img src={stepsImage} alt="融资阶梯" className="steps-image" />
                
                <div className="funding-stages">
                  <div className="funding-stage stage-1">
                    <div className="stage-box">
                      <h3 className="stage-title">天使轮及PreA轮完成</h3>
                      <p className="stage-description">100%已完成融资 (已锁定2亿人名币)</p>
                    </div>
                  </div>
                  
                  <div className="funding-stage stage-2">
                    <div className="stage-box">
                      <h3 className="stage-title">后续融资持续放态度</h3>
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

export default FundingProgress;