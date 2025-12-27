
import React from 'react';
import { UserData } from '../types';

interface UserDashboardProps {
  user: UserData;
  onLogout: () => void;
}

export const UserDashboard: React.FC<UserDashboardProps> = ({ user, onLogout }) => {
  return (
    <div className="w-full max-w-2xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="text-center space-y-2">
        <h2 className="christmas-font text-5xl text-red-500">Olá, {user.name}!</h2>
        <p className="text-slate-300 font-medium italic opacity-80">{user.message}</p>
      </div>

      <div className="relative overflow-hidden rounded-2xl shadow-2xl border-4 border-slate-800 bg-slate-800">
        <img
          src={user.imageUrl}
          alt="Christmas Surprise"
          className="w-full h-auto object-cover block opacity-90 hover:opacity-100 transition-opacity duration-500"
        />
        <div className="absolute top-4 right-4">
           <i className="fa-solid fa-ribbon text-red-600 text-5xl drop-shadow-lg"></i>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={onLogout}
          className="text-slate-500 hover:text-red-400 text-sm font-medium transition-colors flex items-center space-x-2 py-2 px-4 rounded-full hover:bg-white/5"
        >
          <i className="fa-solid fa-arrow-left text-xs"></i>
          <span>Voltar</span>
        </button>
      </div>
    </div>
  );
};
