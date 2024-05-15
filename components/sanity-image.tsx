import Image from 'next/image'

import { urlForImage } from '@/sanity/lib/utils'

interface ImageBoxProps {
  image?: { asset?: any }
  alt: string
  width?: number
  height?: number
  className?: string
  'data-sanity'?: string
}

export default function SanityImage({
  image,
  alt,
  width,
  height,
  className,
  ...props
}: ImageBoxProps) {
  const imageUrl = image && urlForImage(image)?.url()

  return (
    <div
      className={`w-full overflow-hidden ${className}`}
      data-sanity={props['data-sanity']}
    >
      {imageUrl && (
        <Image
          alt={alt}
          fill
          src={imageUrl}
          style={{
            objectFit: 'contain',
          }}
        />
      )}
    </div>
  )
}
