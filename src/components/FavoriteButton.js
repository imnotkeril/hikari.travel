import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';
import { STORAGE_KEYS, loadFromStorage, saveToStorage } from '../utils/storage';

const FavoriteButton = ({ tourId, translations, onToggle }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  
  // Default translations
  const t = translations || {
    addToFavorites: 'Add to favorites',
    removeFromFavorites: 'Remove from favorites'
  };
  
  // Check if tour is in favorites on mount
  useEffect(() => {
    const favorites = loadFromStorage(STORAGE_KEYS.FAVORITES, []);
    setIsFavorite(favorites.includes(tourId));
  }, [tourId]);
  
  // Toggle favorite status
  const toggleFavorite = () => {
    const favorites = loadFromStorage(STORAGE_KEYS.FAVORITES, []);
    let newFavorites;
    
    if (isFavorite) {
      // Remove from favorites
      newFavorites = favorites.filter(id => id !== tourId);
    } else {
      // Add to favorites
      newFavorites = [...favorites, tourId];
    }
    
    // Update localStorage
    saveToStorage(STORAGE_KEYS.FAVORITES, newFavorites);
    
    // Update state
    setIsFavorite(!isFavorite);
    
    // Call callback if provided
    if (onToggle) {
      onToggle(!isFavorite);
    }
  };

  return (
    <button
      onClick={toggleFavorite}
      className={`flex items-center px-4 py-2 rounded-md ${
        isFavorite 
          ? 'bg-pink-100 text-pink-600 border border-pink-200' 
          : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
      }`}
      aria-label={isFavorite ? t.removeFromFavorites : t.addToFavorites}
      title={isFavorite ? t.removeFromFavorites : t.addToFavorites}
    >
      <Heart className={`w-5 h-5 mr-2 ${isFavorite ? 'fill-current text-pink-500' : ''}`} />
      <span>{isFavorite ? t.removeFromFavorites : t.addToFavorites}</span>
    </button>
  );
};

export default FavoriteButton;