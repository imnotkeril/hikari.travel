// Utility functions for working with localStorage

// Save data to localStorage
export const saveToStorage = (key, data) => {
    try {
      const serializedData = JSON.stringify(data);
      localStorage.setItem(key, serializedData);
      return true;
    } catch (error) {
      console.error('Error saving to localStorage:', error);
      return false;
    }
  };
  
  // Load data from localStorage
  export const loadFromStorage = (key, defaultValue = null) => {
    try {
      const serializedData = localStorage.getItem(key);
      if (serializedData === null) {
        return defaultValue;
      }
      return JSON.parse(serializedData);
    } catch (error) {
      console.error('Error loading from localStorage:', error);
      return defaultValue;
    }
  };
  
  // Remove data from localStorage
  export const removeFromStorage = (key) => {
    try {
      localStorage.removeItem(key);
      return true;
    } catch (error) {
      console.error('Error removing from localStorage:', error);
      return false;
    }
  };
  
  // Clear all data from localStorage
  export const clearStorage = () => {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error('Error clearing localStorage:', error);
      return false;
    }
  };
  
  // Get all keys from localStorage
  export const getStorageKeys = () => {
    try {
      return Object.keys(localStorage);
    } catch (error) {
      console.error('Error getting localStorage keys:', error);
      return [];
    }
  };
  
  // Check if data exists in localStorage
  export const existsInStorage = (key) => {
    try {
      return localStorage.getItem(key) !== null;
    } catch (error) {
      console.error('Error checking localStorage:', error);
      return false;
    }
  };
  
  // Storage keys constants
  export const STORAGE_KEYS = {
    LANGUAGE: 'hikari_language',
    USER_DATA: 'hikari_user_data',
    RECENT_TOURS: 'hikari_recent_tours',
    FAVORITES: 'hikari_favorites',
    SEARCH_HISTORY: 'hikari_search_history',
    CART: 'hikari_cart'
  };
  
  export default {
    saveToStorage,
    loadFromStorage,
    removeFromStorage,
    clearStorage,
    getStorageKeys,
    existsInStorage,
    STORAGE_KEYS
  };