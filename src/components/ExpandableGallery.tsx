import React, { useState } from 'react'

// Simple className utility function
const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

interface GalleryItem {
  src: string
  title?: string
  description?: string
  alt?: string
}

interface ExpandableGalleryProps {
  images: GalleryItem[]
  className?: string
}

const ExpandableGallery: React.FC<ExpandableGalleryProps> = ({ images, className }) => {
  const [selected, setSelected] = useState<GalleryItem | null>(null)

  return (
    <>
      <div className={cn('flex h-64 md:h-96 w-full gap-2', className)}>
        {images.map((item, index) => (
          <button
            key={index}
            type="button"
            onClick={() => setSelected(item)}
            className="relative flex h-full flex-1 cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ease-in-out hover:flex-[3] focus:outline-none focus:ring-2 focus:ring-black/40 dark:focus:ring-white/60"
          >
            <img
              className="relative h-full w-full object-cover"
              src={item.src}
              alt={item.alt || item.title || `Gallery image ${index + 1}`}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-0 hover:opacity-100 transition-opacity" />
            {(item.title || item.description) && (
              <div className="absolute bottom-3 left-3 right-3 text-left text-white drop-shadow-lg opacity-0 hover:opacity-100 transition-opacity">
                {item.title && <p className="text-sm font-semibold">{item.title}</p>}
                {item.description && <p className="text-xs text-white/80 line-clamp-2">{item.description}</p>}
              </div>
            )}
          </button>
        ))}
      </div>

      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 h-9 w-9 rounded-full bg-black/70 text-white flex items-center justify-center hover:bg-black/90 transition"
              aria-label="Close"
            >
              x
            </button>
            <img
              src={selected.src}
              alt={selected.alt || selected.title || 'Selected gallery image'}
              className="w-full max-h-[70vh] object-cover"
            />
            {(selected.title || selected.description) && (
              <div className="p-4 md:p-6">
                {selected.title && <h4 className="text-xl font-semibold text-black dark:text-white mb-2">{selected.title}</h4>}
                {selected.description && (
                  <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                    {selected.description}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}

export default ExpandableGallery

