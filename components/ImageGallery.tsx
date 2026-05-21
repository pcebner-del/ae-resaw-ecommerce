"use client";

import { useState } from "react";

interface ImageGalleryProps {
  images: {
    top: string;
    bottom: string;
    sideProfile: string;
  };
  productName: string;
}

export default function ImageGallery({ images, productName }: ImageGalleryProps) {
  const [currentImage, setCurrentImage] = useState<'top' | 'bottom' | 'sideProfile'>('top');

  const imageLabels = {
    top: 'Top View',
    bottom: 'Bottom View',
    sideProfile: 'Side Profile',
  };

  return (
    <div className="w-full">
      {/* Main Image */}
      <div className="w-full aspect-square bg-cream mb-4 sm:mb-6 flex items-center justify-center">
        <div className="text-center p-6 sm:p-12 w-full">
          <p className="text-xs sm:text-sm tracking-widest uppercase text-charcoal/40 mb-2">
            {imageLabels[currentImage]}
          </p>
          <p className="text-xs tracking-widest uppercase text-charcoal/20">
            Product Photography Coming Soon
          </p>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 w-full">
        {(Object.keys(images) as Array<keyof typeof images>).map((view) => (
          <button
            key={view}
            onClick={() => setCurrentImage(view)}
            className={`aspect-square border transition-all overflow-hidden ${
              currentImage === view
                ? 'border-charcoal'
                : 'border-charcoal/20 hover:border-charcoal/50'
            }`}
          >
            <div className="w-full h-full bg-cream flex items-center justify-center p-1 sm:p-2">
              <span className="text-xs tracking-widest uppercase text-charcoal/30 text-center line-clamp-2">
                {imageLabels[view]}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
