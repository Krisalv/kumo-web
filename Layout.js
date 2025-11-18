import React from 'react';

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dela+Gothic+One&display=swap');
        
        h1, h2, h3, .title-font {
          font-family: 'Dela Gothic One', system-ui, sans-serif !important;
          font-weight: 400 !important;
        }
      `}</style>
      {children}
    </div>
  );
}