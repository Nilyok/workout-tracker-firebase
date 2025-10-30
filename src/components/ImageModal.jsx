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
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 modal-backdrop-mobile"
      onClick={onClose}
    >
      <div 
        className="relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image container - no close button needed */}
        <div className="mobile-modal-343 image-343 sm:w-auto sm:max-w-4xl sm:max-h-[80vh] sm:h-auto bg-slate-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col">
          <div className="modal-header-343 sm:p-4 bg-slate-900 border-b border-slate-700 flex-shrink-0">
            <h3 className="text-white font-semibold text-center truncate">
              {exerciseName}
            </h3>
          </div>
          <div className="flex-1 bg-black overflow-hidden">
            <img
              src={imageUrl}
              alt={exerciseName}
              className="w-full h-full object-contain"
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