import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, HelpCircle } from 'lucide-react';

// About Me Component
export const AboutMe = () => { 
  const [activeTab, setActiveTab] = useState('about');
  
  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 shadow-2xl">
      <div className="flex items-center gap-3 mb-6">
        <HelpCircle className="w-5 h-5 text-gray-500" />
        <div className="flex gap-1 bg-black rounded-full p-1">
          <button
            onClick={() => setActiveTab('about')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === 'about'
                ? 'bg-gray-700 text-white shadow-lg'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            About Me
          </button>
          <button
            onClick={() => setActiveTab('experiences')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === 'experiences'
                ? 'bg-gray-700 text-white shadow-lg'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Experiences
          </button>
          <button
            onClick={() => setActiveTab('recommended')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              activeTab === 'recommended'
                ? 'bg-gray-700 text-white shadow-lg'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Recommended
          </button>
        </div>
      </div>
      
      <div className="text-gray-400 text-sm space-y-4 max-h-32 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        <p className="leading-relaxed">
          Hello! I'm Dave, your sales rep here from Salesforce. I've been working at this awesome company for 3 years now.
        </p>
        <p className="leading-relaxed">
          I was born and raised in Albany, NY & have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters - Emma and Ella. Both of them are just starting school, so my calendar is usually blocked between 9-10 AM. This is a...
        </p>
      </div>
      
      <style jsx>{`
        .scrollbar-thin::-webkit-scrollbar {
          width: 6px;
        }
        .scrollbar-thin::-webkit-scrollbar-track {
          background: transparent;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb {
          background: #4b5563;
          border-radius: 3px;
        }
        .scrollbar-thin::-webkit-scrollbar-thumb:hover {
          background: #6b7280;
        }
      `}</style>
    </div>
  );
};
   
// Gallery Component
export const Gallery = () => {
  const [images, setImages] = useState([
    { url: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Cdefs%3E%3ClinearGradient id="g1" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23444;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23888;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="200" height="200" fill="url(%23g1)"/%3E%3Cpath d="M 40 50 Q 60 30 80 50 T 120 50 T 160 50" stroke="%23333" stroke-width="8" fill="none"/%3E%3Cpath d="M 40 80 Q 60 60 80 80 T 120 80 T 160 80" stroke="%23333" stroke-width="8" fill="none"/%3E%3Cpath d="M 40 110 Q 60 90 80 110 T 120 110 T 160 110" stroke="%23333" stroke-width="8" fill="none"/%3E%3Cpath d="M 40 140 Q 60 120 80 140 T 120 140 T 160 140" stroke="%23333" stroke-width="8" fill="none"/%3E%3C/svg%3E', title: 'Abstract Art 1' },
    { url: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Cdefs%3E%3ClinearGradient id="g2" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23555;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23999;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="200" height="200" fill="url(%23g2)"/%3E%3Cpath d="M 40 50 Q 60 30 80 50 T 120 50 T 160 50" stroke="%23222" stroke-width="8" fill="none"/%3E%3Cpath d="M 40 80 Q 60 60 80 80 T 120 80 T 160 80" stroke="%23222" stroke-width="8" fill="none"/%3E%3Cpath d="M 40 110 Q 60 90 80 110 T 120 110 T 160 110" stroke="%23222" stroke-width="8" fill="none"/%3E%3Cpath d="M 40 140 Q 60 120 80 140 T 120 140 T 160 140" stroke="%23222" stroke-width="8" fill="none"/%3E%3C/svg%3E', title: 'Abstract Art 2' },
    { url: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="200" height="200"%3E%3Cdefs%3E%3ClinearGradient id="g3" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23666;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23aaa;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="200" height="200" fill="url(%23g3)"/%3E%3Cpath d="M 40 50 Q 60 30 80 50 T 120 50 T 160 50" stroke="%23111" stroke-width="8" fill="none"/%3E%3Cpath d="M 40 80 Q 60 60 80 80 T 120 80 T 160 80" stroke="%23111" stroke-width="8" fill="none"/%3E%3Cpath d="M 40 110 Q 60 90 80 110 T 120 110 T 160 110" stroke="%23111" stroke-width="8" fill="none"/%3E%3Cpath d="M 40 140 Q 60 120 80 140 T 120 140 T 160 140" stroke="%23111" stroke-width="8" fill="none"/%3E%3C/svg%3E', title: 'Abstract Art 3' }
  ]);
  
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const fileInputRef = React.useRef(null);

  const handleAddImage = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImages([...images, { url: event.target.result, title: file.name }]);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(images.length - 3, prev + 1));
  };

  const visibleImages = images.slice(currentIndex, currentIndex + 3);

  return (
    <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-6 shadow-2xl">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <HelpCircle className="w-5 h-5 text-gray-500" />
          <button className="px-5 py-2 bg-black text-white rounded-full text-sm font-medium shadow-lg">
            Gallery
          </button>
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={handleAddImage}
            className="flex items-center gap-2 px-4 py-2 bg-gray-700/50 text-white rounded-full text-xs font-medium transition-all duration-300 hover:bg-gray-600 hover:shadow-lg hover:scale-105"
          >
            <Plus className="w-3.5 h-3.5" />
            ADD IMAGE
          </button>
          
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-2.5 bg-gray-700/50 rounded-full transition-all duration-300 hover:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-4 h-4 text-white" />
          </button>
          
          <button
            onClick={handleNext}
            disabled={currentIndex >= images.length - 3}
            className="p-2.5 bg-gray-700/50 rounded-full transition-all duration-300 hover:bg-gray-600 disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-4 h-4 text-white" />
          </button>
        </div>
      </div>
      
      <div className="flex gap-4 overflow-x-auto scrollbar-hide pb-2">
        {visibleImages.map((img, idx) => {
          const absoluteIdx = currentIndex + idx;
          return (
            <div
              key={absoluteIdx}
              className="relative flex-shrink-0 w-36 h-36 rounded-2xl overflow-hidden shadow-xl transition-all duration-300 cursor-pointer group"
              onMouseEnter={() => setHoveredIndex(absoluteIdx)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{
                animation: `fadeIn 0.5s ease-out ${idx * 0.1}s both`
              }}
            >
              <img
                src={img.url}
                alt={img.title}
                className={`w-full h-full object-cover transition-all duration-500 ${
                  hoveredIndex === absoluteIdx ? 'scale-110 grayscale-0' : 'grayscale scale-100'
                }`}
              />
              
              {/* Overlay on hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300 ${
                  hoveredIndex === absoluteIdx ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="absolute bottom-3 left-3 right-3">
                  <p className="text-white text-xs font-medium truncate">
                    {img.title}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

 