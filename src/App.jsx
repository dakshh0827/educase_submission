import React, { useState, useEffect } from 'react';
import HomePage from './pages/HomePage.jsx';
import SignupPage from './pages/SignupPage.jsx';
import LoginPage from './pages/LoginPage.jsx';
import ProfilePage from './pages/ProfilePage.jsx';
import Navigation from './components/navigation.jsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [previousPage, setPreviousPage] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState('right');
  const totalPages = 4;

  const navigateTo = (pageNumber) => {
    if (pageNumber !== currentPage && !animating) {
      setAnimating(true);
      setPreviousPage(currentPage);
      setDirection(pageNumber > currentPage ? 'right' : 'left');
      setCurrentPage(pageNumber);
      
      setTimeout(() => {
        setAnimating(false);
      }, 300);
    }
  };

  const renderPage = (page) => {
    switch(page) {
      case 1: return <HomePage navigateTo={navigateTo} />;
      case 2: return <LoginPage navigateTo={navigateTo} />;
      case 3: return <SignupPage navigateTo={navigateTo} />;
      case 4: return <ProfilePage navigateTo={navigateTo} />;
      default: return null;
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 overflow-hidden">
      <div className="bg-white w-full max-w-sm h-[740px] shadow-lg rounded-md overflow-hidden flex flex-col">
        <div className="h-[670px] relative overflow-hidden">
          {animating && previousPage && (
            <div 
              className={`absolute top-0 left-0 w-full h-full transition-transform duration-300 ease-in-out ${
                direction === 'right' ? '-translate-x-full' : 'translate-x-full'
              }`}
            >
              {renderPage(previousPage)}
            </div>
          )}
          
          <div 
            className={`absolute top-0 left-0 w-full h-full ${
              animating ? 'transition-transform duration-100 ease-in-out transform-gpu' : ''
            } ${
              animating && direction === 'right' ? 'translate-x-0 animate-slide-from-right' : 
              animating && direction === 'left' ? 'translate-x-0 animate-slide-from-left' : ''
            }`}
          >
            {renderPage(currentPage)}
          </div>
        </div>
        
        <div className="h-[90px] px-6 py-4">
          <Navigation 
            currentPage={currentPage} 
            totalPages={totalPages} 
            navigateTo={navigateTo} 
          />
        </div>
      </div>
    </div>
  );
}