import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import Hero from './Hero';
import Research from './Research';
import NutritionDetection from './NutritionDetection';
import MetabolismAnalysis from './MetabolismAnalysis';
import NutritionCorrection from './NutritionCorrection';
import Team from './Team';
import FundingProgress from './FundingProgress';
import CompanyNews from './CompanyNews';
import Footer from './Footer'; // 导入底部组件
import './Home.css';

function Home() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const sectionRefs = useRef([]);

  // 初始化 Intersection Observer
  useEffect(() => {
    // 滚动监听函数
    const handleScroll = () => {
      // 当页面滚动超过300px时显示按钮
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }

      // 添加简单的视差滚动效果
      const scrollY = window.scrollY;
      document.documentElement.style.setProperty('--scroll', scrollY / 1000);
    };

    // 添加鼠标移动跟踪
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty('--mouse-x', `${x}%`);
      document.documentElement.style.setProperty('--mouse-y', `${y}%`);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // 当元素进入视口时添加animate-in类，离开时移除
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          } else {
            entry.target.classList.remove('animate-in');
          }
        });
      },
      {
        threshold: 0.15, 
        rootMargin: '0px 0px -40px 0px' 
      }
    );

    
    const sections = document.querySelectorAll('.animate-section');
    sections.forEach((section) => {
      observer.observe(section);
      sectionRefs.current.push(section);
    });

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // 平滑滚动效果
    });
  };

  return (
    <div className="home">
      <Header />
      <Hero />
      <div className="animate-section">
        <Research />
      </div>
      <div className="animate-section">
        <NutritionDetection />
      </div>
      <div className="animate-section">
        <MetabolismAnalysis />
      </div>
      <div className="animate-section">
        <NutritionCorrection />
      </div>
      <div className="animate-section">
        <Team />
      </div>
      <FundingProgress /> {/* 移除animate-section包装，使其始终可见 */}
      <div className="animate-section">
        <CompanyNews />
      </div>
      <Footer /> {/* 添加底部组件 */}
      
      {/* 回到顶部按钮 */}
      {showBackToTop && (
        <button 
          className="back-to-top" 
          onClick={scrollToTop}
          aria-label="回到顶部"
        >
          <svg viewBox="0 0 24 24" width="28" height="28">
            <path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"></path>
          </svg>
          <span>顶部</span>
        </button>
      )}
    </div>
  );
}

export default Home;