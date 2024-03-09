import React from 'react';

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-slate-600">
      <img
        src="/loading.gif" // Replace "/loading.gif" with your loading image source
        alt="Loading..."
        className="w-10 h-10 animate-bounce" // Example Tailwind CSS classes for styling the loading image
      />
    </div>
  );
};

export default Loading;
