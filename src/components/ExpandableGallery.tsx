import React from 'react'

// Simple className utility function
const cn = (...classes: (string | undefined | null | false)[]): string => {
  return classes.filter(Boolean).join(' ')
}

interface ExpandableGalleryProps {
  images: string[]
  className?: string
}

const ExpandableGallery: React.FC<ExpandableGalleryProps> = ({ images, className }) => {
  return (
    <div className={cn('flex h-64 md:h-96 w-full gap-2', className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative flex h-full flex-1 cursor-pointer overflow-hidden rounded-xl transition-all duration-500 ease-in-out hover:flex-[3]"
        >
          <img
            className="relative h-full w-full object-cover"
            src={image}
            alt={`Gallery image ${index + 1}`}
            loading="lazy"
          />
        </div>
      ))}
    </div>
  )
}

export default ExpandableGallery

