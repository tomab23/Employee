// contexts/AuthContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../SupabaseClient";
import { Navigate, useNavigate } from "react-router-dom";

// Créer le contexte (non exporté)
const AuthContext = createContext({});

// Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Récupérer la session initiale
    const getInitialSession = async () => {
      try {
        const {
          data: { session },
          error,
        } = await supabase.auth.getSession();
        if (error) throw error;

        setSession(session);
        setUser(session?.user || null);
      } catch (error) {
        console.error("Erreur lors de la récupération de la session:", error);
      } finally {
        setLoading(false);
      }
    };

    getInitialSession();

    // Écouter les changements d'authentification
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event, session);
      setSession(session);
      setUser(session?.user || null);
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  // Fonctions d'authentification
  const signIn = async (email, password) => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });
      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      return { data: null, error: error.message };
    } finally {
      setLoading(false);
    }
  };

const signUp = async (
    email,
    password,
    firstname,
    lastname,
    location = {}
) => {
    // Inscription de l'utilisateur
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: {
                first_name: firstname,
                last_name: lastname,
                location: location,
                avatar: "shapes"
            }
        }
    });

    // Vérifiez si l'objet 'error' est défini
    if (error) {
        // Gérer l'erreur d'inscription
        console.error('Erreur lors de l\'inscription:', error.message);
        return; // Sortir de la fonction si l'inscription échoue
    }

    if (data) {
        // Si l'inscription a réussi, vous pouvez continuer
        console.log('Utilisateur inscrit avec succès:', data.user);

        // Insertion des métadonnées dans la table profiles
        const { data: profileData, error: profileError } = await supabase
            .from('profiles')
            .insert([
                { user_id: data.user.id, firstname: firstname, lastname: lastname, location: location, avatar: "shapes" }
            ]);

        if (profileError) {
            console.error('Erreur lors de l\'insertion du profil:', profileError.message);
        } else {
            console.log('Profil créé avec succès:', profileData);
        }
    } else {
        // Gérer le cas où ni 'data' ni 'error' ne sont définis
        console.error('Une erreur inconnue est survenue lors de l\'inscription.');
    }
};

  const signOut = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      return { error: null };
    } catch (error) {
      console.error("Erreur lors de la déconnexion:", error);
      return { error: error.message };
    } finally {
      setLoading(false);
      navigate("/");
    }
  };

  const resetPassword = async (email) => {
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: `${window.location.origin}/reset-password`,
      });
      if (error) throw error;
      return { error: null };
    } catch (error) {
      console.error("Erreur lors de la réinitialisation:", error);
      return { error: error.message };
    }
  };

  const updateProfile = async (updates) => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.updateUser({
        data: updates,
      });
      if (error) throw error;
      return { data, error: null };
    } catch (error) {
      console.error("Erreur lors de la mise à jour:", error);
      return { data: null, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const value = {
    user,
    session,
    loading,
    userMetadata: user?.user_metadata || null,
    isAuthenticated: !!user,
    signIn,
    signUp,
    signOut,
    resetPassword,
    updateProfile,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook personnalisé
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth doit être utilisé dans AuthProvider");
  }
  return context;
}

// Hook pour protéger les routes
export function useRequireAuth() {
  const { user, loading } = useAuth();

  useEffect(() => {
    if (!loading && !user) {
      window.location.href = "/login";
    }
  }, [user, loading]);

  return { user, loading };
}
