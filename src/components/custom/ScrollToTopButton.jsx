import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fonction pour faire défiler vers le haut
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Surveiller la position de défilement
  useEffect(() => {
    const toggleVisibility = () => {
      // Montrer le bouton quand on a scrollé plus de 300px
      if (window.pageYOffset > 10) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Ajouter l'écouteur d'événement
    window.addEventListener('scroll', toggleVisibility);

    // Nettoyer l'écouteur d'événement
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Si le bouton n'est pas visible, ne rien afficher
  if (!isVisible) return null;

  return (
    <button 
      onClick={scrollToTop}
      className="fixed bottom-18 right-6 bg-base-300 text-white 
                 p-3 rounded-full shadow-lg hover:bg-base-200
                 transition-colors duration-300 z-50 cursor-pointer"
      aria-label="Scroll to top"
    >
      <ChevronUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;