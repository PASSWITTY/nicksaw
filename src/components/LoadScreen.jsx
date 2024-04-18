//import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white rounded-full p-4 flex items-center space-x-4">
        <div className="w-4 h-4 rounded-full bg-indigo-500 animate-pulse"></div>
        <div className="w-4 h-4 rounded-full bg-indigo-500 animate-pulse delay-75"></div>
        <div className="w-4 h-4 rounded-full bg-indigo-500 animate-pulse delay-150"></div>
      </div>
    </div>
  );
};

export default LoadingScreen;