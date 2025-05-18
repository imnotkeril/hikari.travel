import React from 'react';
import { Star } from 'lucide-react';

const StarRating = ({ rating, maxRating = 5, size = 'md', readOnly = true, onChange }) => {
  // Helper for determining star size based on prop
  const getStarSize = () => {
    switch (size) {
      case 'sm':
        return 'w-4 h-4';
      case 'lg':
        return 'w-6 h-6';
      case 'xl':
        return 'w-8 h-8';
      case 'md':
      default:
        return 'w-5 h-5';
    }
  };

  // Generate array of stars
  const stars = [];
  const starSize = getStarSize();

  // Handle clicking on a star (for interactive rating)
  const handleStarClick = (index) => {
    if (!readOnly && onChange) {
      onChange(index + 1);
    }
  };

  // Create star elements
  for (let i = 0; i < maxRating; i++) {
    const isFilled = i < Math.floor(rating);
    const isHalfFilled = !isFilled && i < Math.ceil(rating) && (rating % 1) !== 0;
    
    stars.push(
      <span 
        key={i}
        className={`cursor-${readOnly ? 'default' : 'pointer'}`}
        onClick={() => handleStarClick(i)}
      >
        {isFilled ? (
          <Star className={`${starSize} text-yellow-500 fill-current`} />
        ) : isHalfFilled ? (
          <div className="relative">
            <Star className={`${starSize} text-gray-300`} />
            <div className="absolute top-0 left-0 w-1/2 overflow-hidden">
              <Star className={`${starSize} text-yellow-500 fill-current`} />
            </div>
          </div>
        ) : (
          <Star className={`${starSize} text-gray-300`} />
        )}
      </span>
    );
  }

  return (
    <div className="flex items-center">
      {stars}
      {rating && (
        <span className="ml-1 text-gray-700 font-medium">
          {typeof rating === 'number' ? rating.toFixed(1) : rating}
        </span>
      )}
    </div>
  );
};

export default StarRating;