import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

const ImageGallery = ({ images, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Generate thumbnails
  const renderThumbnails = () => {
    return images.map((image, index) => (
      <div 
        key={index}
        className={`relative cursor-pointer hover:opacity-90 transition-opacity duration-300 ${index === currentIndex ? 'border-2 border-pink-500' : 'border border-gray-200'}`}
        onClick={() => setCurrentIndex(index)}
      >
        <img
          src={typeof image === 'string' ? image : image.src}
          alt={typeof image === 'string' ? `Image ${index + 1}` : image.alt || `Image ${index + 1}`}
          className="h-16 w-24 object-cover"
        />
      </div>
    ));
  };
  
  // Navigate to previous image
  const prevImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };
  
  // Navigate to next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };
  
  // Open fullscreen modal
  const openModal = () => {
    setIsModalOpen(true);
    // Prevent scrolling on body when modal is open
    document.body.style.overflow = 'hidden';
  };
  
  // Close fullscreen modal
  const closeModal = () => {
    setIsModalOpen(false);
    // Restore scrolling
    document.body.style.overflow = '';
  };
  
  // Get current image
  const currentImage = images[currentIndex];
  const imageUrl = typeof currentImage === 'string' ? currentImage : currentImage.src;
  const imageAlt = typeof currentImage === 'string' ? `Image ${currentIndex + 1}` : currentImage.alt || `Image ${currentIndex + 1}`;

  return (
    <div className="flex flex-col">
      {/* Main image */}
      <div 
        className="relative rounded-lg overflow-hidden mb-4 cursor-pointer"
        onClick={openModal}
      >
        <img
          src={imageUrl}
          alt={imageAlt}
          className="w-full h-80 md:h-96 object-cover"
        />
        
        {/* Navigation arrows for main view */}
        <button
          className="absolute left-2 top-1/2 transform -translate-y-1/2 p-1 bg-white bg-opacity-70 rounded-full hover:bg-opacity-90"
          onClick={(e) => {
            e.stopPropagation();
            prevImage();
          }}
        >
          <ChevronLeft className="w-6 h-6 text-gray-800" />
        </button>
        
        <button
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 bg-white bg-opacity-70 rounded-full hover:bg-opacity-90"
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
        >
          <ChevronRight className="w-6 h-6 text-gray-800" />
        </button>
        
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-60 text-white px-2 py-1 text-sm rounded">
          {currentIndex + 1} / {images.length}
        </div>
      </div>
      
      {/* Thumbnails */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {renderThumbnails()}
      </div>
      
      {/* Fullscreen modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col justify-center items-center">
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            onClick={closeModal}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="relative max-w-screen-lg max-h-screen-lg p-4">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="max-h-[80vh] max-w-full object-contain"
            />
            
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 text-white"
              onClick={prevImage}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-70 text-white"
              onClick={nextImage}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-60 text-white px-3 py-1 rounded-full">
              {currentIndex + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;