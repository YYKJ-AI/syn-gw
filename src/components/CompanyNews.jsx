import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './CompanyNews.css';

function CompanyNews() {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // 新闻卡片数据
  const newsCards = [
    {
      year: "2024年",
      title: "公司成立",
      description: "2023年完成团队搭建，2024年中公司正式成立。",
      image: require('../image/图-公司成立@2x.png'),
      alt: "公司成立"
    },
    {
      year: "2025年",
      title: "受邀参展",
      description: "应中科院生物物理所邀请，携产品出席北京科技博览会。图为专家向参展者介绍我司产品功能。",
      image: require('../image/图-受邀参展@2x.png'),
      alt: "受邀参展"
    },
    {
      year: "2025年",
      title: "学术交流",
      description: "应美国塔夫茨大学邀请，携产品进行学术交流。图为公司副总与参会教授合影。",
      image: require('../image/图-学术交流@2x.png'),
      alt: "学术交流"
    },
    {
      year: "2025年",
      title: "社区走访",
      description: "应美国新泽西州医护产业工会邀请，携产品进行学术交流。图为公司副总与体验家庭合影。",
      image: require('../image/图-社区走访@2x.png'),
      alt: "社区走访"
    }
  ];

  // 计算要显示的卡片
  const getVisibleCards = () => {
    const totalCards = newsCards.length;
    const cards = [];
    
    // 一次显示3个卡片
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % totalCards;
      cards.push(newsCards[index]);
    }
    
    return cards;
  };

  // 自动轮播效果
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % newsCards.length);
    }, 3000); // 每3秒切换一次
    
    return () => clearInterval(interval);
  }, [newsCards.length]);

  return (
    <div className="company-news" >
      <div className="container">
        <div className="news-header">
          <h2 className="news-title" id="dynamics">动态信息</h2>
          <p className="news-subtitle">盈养科技的发展历程</p>
        </div>
        
        <div className="news-timeline">
          <div className="news-carousel">
            <div className="news-cards-container">
              {getVisibleCards().map((card, index) => (
                <div 
                  key={`${currentIndex}-${index}`}
                  className="news-card"
                >
                  <div className="card-year">{card.year}</div>
                  <div className="card-content">
                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-description">{card.description}</p>
                    <div className="card-image">
                      <img src={card.image} alt={card.alt} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyNews;