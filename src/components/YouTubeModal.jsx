import React, { useEffect } from 'react';

export default function YouTubeModal({ isOpen, onClose, videoUrl, exerciseName }) {
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

  const getVideoId = (url) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match ? match[1] : null;
  };

  const videoId = getVideoId(videoUrl);
  const embedUrl = videoId ? `https://www.youtube.com/embed/${videoId}?autoplay=1` : null;

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-0 sm:p-4 modal-container-mobile"
      onClick={onClose}
    >
      <div 
        className="relative w-full h-full flex items-center justify-center mobile-full-viewport"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button - fixed position for mobile */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 sm:top-6 sm:right-6 z-50 text-white hover:text-sky-300 text-3xl bg-black/80 rounded-full w-12 h-12 flex items-center justify-center shadow-lg border border-white/30"
        >
          ×
        </button>
        
        {/* Video container - full screen on mobile */}
        <div className="w-full h-full sm:w-[90vw] sm:h-[80vh] sm:max-w-4xl sm:max-h-[85vh] bg-slate-800 sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col video-modal-mobile mobile-full-viewport">
          <div className="p-3 sm:p-4 bg-slate-900 border-b border-slate-700 flex-shrink-0">
            <h3 className="text-white font-semibold text-center text-base sm:text-lg truncate">
              {exerciseName}
            </h3>
          </div>
          <div className="flex-1 w-full h-full bg-black">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                className="w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={exerciseName}
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-white p-4 text-center">
                Invalid YouTube URL
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}