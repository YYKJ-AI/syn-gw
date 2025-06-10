
import React, { useState } from 'react';
import './App.css';
import Home from './components/Home';
import SplashScreen from './components/SplashScreen';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  return (
    <div className="App">
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      <Home />
    </div>
  );
}

export default App;

