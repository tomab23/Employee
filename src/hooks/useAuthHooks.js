// hooks/useAuth.js
import { useContext, useEffect } from 'react';
import { AuthContext } from '../contexts/AuthContext';

// Hook personnalisé pour utiliser le contexte
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth doit être utilisé dans AuthProvider');
  }
  return context;
};

// Hook pour protéger les routes
export const useRequireAuth = () => {
  const { user, loading } = useAuth();
  
  useEffect(() => {
    if (!loading && !user) {
      // Rediriger vers la page de connexion ou afficher un message
      window.location.href = '/login';
    }
  }, [user, loading]);

  return { user, loading };
};