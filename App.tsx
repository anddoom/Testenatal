
import React, { useState, useEffect } from 'react';
import { Layout } from './components/Layout';
import { LoginPage } from './components/LoginPage';
import { UserDashboard } from './components/UserDashboard';
import { USER_CONFIG } from './constants';
import { UserData } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<UserData | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check local storage for persistent session
    const savedUser = localStorage.getItem('gallery_user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (e) {
        localStorage.removeItem('gallery_user');
      }
    }
    setIsLoading(false);
  }, []);

  const handleLogin = (code: string) => {
    const userData = USER_CONFIG[code];
    if (userData) {
      setUser(userData);
      localStorage.setItem('gallery_user', JSON.stringify(userData));
    }
  };

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem('gallery_user');
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="flex flex-col items-center">
          <i className="fa-solid fa-spinner fa-spin text-4xl text-indigo-600 mb-4"></i>
          <p className="text-slate-500 font-medium">Checking credentials...</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      {!user ? (
        <LoginPage onLogin={handleLogin} />
      ) : (
        <UserDashboard user={user} onLogout={handleLogout} />
      )}
    </Layout>
  );
};

export default App;
