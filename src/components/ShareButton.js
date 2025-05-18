import React, { useState } from 'react';
import { Share, Copy, Check, Facebook, Twitter, Mail } from 'lucide-react';

const ShareButton = ({ url, title, translations }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  
  // Default translations if not provided
  const t = translations || {
    share: 'Share',
    shareOn: 'Share on',
    copyLink: 'Copy link',
    linkCopied: 'Link copied!',
    facebook: 'Facebook',
    twitter: 'Twitter',
    email: 'Email'
  };
  
  // Current URL if not provided
  const shareUrl = url || window.location.href;
  const shareTitle = title || document.title;
  
  // Toggle dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  
  // Copy link to clipboard
  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    });
  };
  
  // Share on social media
  const shareOnFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}&t=${encodeURIComponent(shareTitle)}`, '_blank');
  };
  
  const shareOnTwitter = () => {
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(shareTitle)}`, '_blank');
  };
  
  const shareByEmail = () => {
    window.open(`mailto:?subject=${encodeURIComponent(shareTitle)}&body=${encodeURIComponent(shareUrl)}`, '_blank');
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="flex items-center bg-white hover:bg-gray-100 text-gray-800 font-medium py-2 px-4 rounded-md border border-gray-300"
      >
        <Share className="w-4 h-4 mr-2" />
        {t.share}
      </button>
      
      {isOpen && (
        <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
          <button
            onClick={copyToClipboard}
            className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            {copied ? <Check className="w-4 h-4 mr-2 text-green-500" /> : <Copy className="w-4 h-4 mr-2" />}
            {copied ? t.linkCopied : t.copyLink}
          </button>
          
          <div className="border-t border-gray-100 my-1"></div>
          
          <button
            onClick={shareOnFacebook}
            className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Facebook className="w-4 h-4 mr-2 text-blue-600" />
            {t.shareOn} {t.facebook}
          </button>
          
          <button
            onClick={shareOnTwitter}
            className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Twitter className="w-4 h-4 mr-2 text-blue-400" />
            {t.shareOn} {t.twitter}
          </button>
          
          <button
            onClick={shareByEmail}
            className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            <Mail className="w-4 h-4 mr-2 text-gray-600" />
            {t.shareOn} {t.email}
          </button>
        </div>
      )}
      
      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-10" 
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </div>
  );
};

export default ShareButton;