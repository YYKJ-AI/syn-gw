import React, { useEffect, useState } from 'react';
// 尝试使用另一个图片
import appIcon from '../image/APP-ICON - 1.png';

function SplashScreen({ onComplete }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // 2秒后开始淡出动画
    const timer = setTimeout(() => {
      setFadeOut(true);
    }, 2000);

    // 3秒后完全移除splash screen
    const completeTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 3000);

    return () => {
      clearTimeout(timer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // 使用内联样式代替CSS文件
  const styles = {
    splashScreen: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      backgroundColor: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 9999,
      opacity: fadeOut ? 0 : 1,
      transition: 'opacity 1s ease',
      pointerEvents: fadeOut ? 'none' : 'auto'
    },
    splashContent: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      transform: fadeOut ? 'translateY(-30px)' : 'translateY(0)',
      transition: 'transform 1.5s ease'
    },
    logo: {
      width: '150px',
      height: 'auto',
      marginBottom: '20px',
      border: '1px solid #eee' // 添加边框以确保可见
    },
    line: {
      width: '80px',
      height: '2px',
      backgroundColor: '#0056E0',
      margin: '20px 0'
    },
    text: {
      fontSize: '24px',
      fontWeight: 600,
      color: '#333'
    }
  };

  return (
    <div style={styles.splashScreen}>
      <div style={styles.splashContent}>
        <img src={appIcon} alt="盈养科技" style={styles.logo} />
        <div style={styles.line}></div>
        <div style={styles.text}>盈养科技</div>
      </div>
    </div>
  );
}

export default SplashScreen;