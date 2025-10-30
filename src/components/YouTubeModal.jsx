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
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 modal-backdrop-mobile"
        onClick={onClose}
        >
      <div 
        className="relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 -right-2 sm:top-4 sm:right-4 z-50 text-white hover:text-sky-300 text-2xl bg-black/80 rounded-full w-10 h-10 flex items-center justify-center shadow-lg border border-white/30"
        >
          ×
        </button>
        
        {/* Video container - 343x343 on mobile */}
        <div className="mobile-modal-343 youtube-343 sm:w-[560px] sm:h-[315px] sm:max-w-none sm:max-h-none bg-slate-800 rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl flex flex-col">
          <div className="modal-header-343 sm:p-4 bg-slate-900 border-b border-slate-700 flex-shrink-0">
            <h3 className="text-white font-semibold text-center truncate">
              {exerciseName}
            </h3>
          </div>
          <div className="flex-1 bg-black">
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
              <div className="w-full h-full flex items-center justify-center text-white p-4 text-center text-sm">
                Invalid YouTube URL
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}