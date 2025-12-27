
import React, { useState } from 'react';
import { VALID_CODES } from '../constants';

interface LoginPageProps {
  onLogin: (code: string) => void;
}

export const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [code, setCode] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      const normalizedCode = code.trim();
      const foundCode = VALID_CODES.find(
        (c) => c.toLowerCase() === normalizedCode.toLowerCase()
      );

      if (foundCode) {
        onLogin(foundCode);
      } else {
        setError('Código não reconhecido.');
        setIsSubmitting(false);
      }
    }, 400);
  };

  return (
    <div className="w-full max-w-sm bg-slate-800/50 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-700 p-8 transition-all">
      <div className="text-center mb-6">
        <h2 className="christmas-font text-4xl font-bold text-red-500 mb-2">Entrar</h2>
        <p className="text-slate-400 text-sm">Digite seu nome para acessar</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          className={`block w-full px-4 py-3 bg-slate-900 border ${
            error ? 'border-red-500' : 'border-slate-700'
          } rounded-xl text-center text-lg text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-red-500/50 transition-all`}
          placeholder="Seu nome"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          disabled={isSubmitting}
        />
        
        {error && (
          <p className="text-center text-sm text-red-400 font-medium">
            {error}
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting || !code.trim()}
          className="w-full py-3 px-4 bg-red-600 hover:bg-red-700 disabled:bg-slate-700 disabled:text-slate-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-red-900/20 flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <i className="fa-solid fa-circle-notch fa-spin"></i>
          ) : (
            <span>Abrir Presente</span>
          )}
        </button>
      </form>
    </div>
  );
};
