
import React from 'react';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 p-4 text-white/5 pointer-events-none">
        <i className="fa-solid fa-snowflake text-8xl animate-pulse"></i>
      </div>
      <div className="absolute bottom-0 right-0 p-4 text-red-600/10 pointer-events-none">
        <i className="fa-solid fa-holly-berry text-9xl"></i>
      </div>
      
      <header className="py-8 px-4 text-center">
        <div className="inline-flex items-center justify-center space-x-6">
          <i className="fa-solid fa-tree text-emerald-500 text-3xl opacity-80"></i>
          <i className="fa-solid fa-gift text-red-500 text-3xl opacity-80"></i>
          <i className="fa-solid fa-star text-yellow-400 text-3xl animate-bounce"></i>
        </div>
      </header>

      <main className="flex-grow flex items-center justify-center p-4 z-10">
        {children}
      </main>

      <footer className="py-8 text-center text-slate-500 text-sm">
        <p className="christmas-font text-2xl text-red-500/40">Feliz Natal</p>
      </footer>
    </div>
  );
};
