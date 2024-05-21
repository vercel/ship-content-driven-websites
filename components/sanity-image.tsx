import Image, { ImageProps } from 'next/image'

import { urlForImage } from '@/sanity/lib/utils'

interface ImageBoxProps extends Omit<ImageProps, 'src' | 'alt'> {
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
          src={imageUrl}
          width={width}
          height={height}
          {...props} // Spread the remaining props to the Image component
        />
      )}
    </div>
  )
}
