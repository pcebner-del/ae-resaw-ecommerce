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
    <div>
      {/* Main Image */}
      <div className="aspect-square bg-cream mb-6 flex items-center justify-center">
        <div className="text-center p-12">
          <p className="text-sm tracking-widest uppercase text-charcoal/40 mb-2">
            {imageLabels[currentImage]}
          </p>
          <p className="text-xs tracking-widest uppercase text-charcoal/20">
            Product Photography Coming Soon
          </p>
        </div>
      </div>

      {/* Thumbnail Navigation */}
      <div className="grid grid-cols-3 gap-4">
        {(Object.keys(images) as Array<keyof typeof images>).map((view) => (
          <button
            key={view}
            onClick={() => setCurrentImage(view)}
            className={`aspect-square border transition-all ${
              currentImage === view
                ? 'border-charcoal'
                : 'border-charcoal/20 hover:border-charcoal/50'
            }`}
          >
            <div className="w-full h-full bg-cream flex items-center justify-center">
              <span className="text-xs tracking-widest uppercase text-charcoal/30">
                {imageLabels[view]}
              </span>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
