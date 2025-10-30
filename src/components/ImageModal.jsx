import React, { useEffect } from 'react';

export default function ImageModal({ isOpen, onClose, imageUrl, exerciseName }) {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.classList.add('modal-open');
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.classList.remove('modal-open');
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-0 sm:p-4 modal-container-mobile"
      onClick={onClose}
    >
      <div 
        className="relative w-full h-full flex items-center justify-center mobile-full-viewport"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 text-white hover:text-sky-300 text-3xl bg-black/80 rounded-full w-12 h-12 flex items-center justify-center shadow-lg border border-white/30"
        >
          ×
        </button>
        
        {/* Image container - full screen on mobile */}
        <div className="w-full h-full sm:w-auto sm:max-w-4xl sm:max-h-[90vh] bg-slate-800 sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col image-modal-mobile mobile-full-viewport">
          <div className="p-3 sm:p-4 bg-slate-900 border-b border-slate-700 flex-shrink-0">
            <h3 className="text-white font-semibold text-center text-base sm:text-lg truncate">
              {exerciseName}
            </h3>
          </div>
          <div className="flex-1 flex items-center justify-center p-2 sm:p-4 bg-black overflow-hidden">
            <img
              src={imageUrl}
              alt={exerciseName}
              className="max-w-full max-h-full object-contain"
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/400x300?text=Image+Not+Found';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}