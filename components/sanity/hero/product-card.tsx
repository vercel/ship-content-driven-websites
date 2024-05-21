import { motion, MotionValue } from 'framer-motion'
import Link from 'next/link'

import SanityImage from '@/components/sanity-image'
import { Hero } from '@/sanity.types'

type Product = NonNullable<Hero['products']>[number]

export const ProductCard = ({
  product,
  translate,
}: {
  product: Product
  translate: MotionValue
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product?.link ?? ''}
        className="block group-hover/product:shadow-2xl"
        prefetch
      >
        <SanityImage
          image={product.thumbnail}
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product?.title ?? ''}
          fill
          style={{ objectFit: 'contain' }}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-background pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100">
        {product.title}
      </h2>
    </motion.div>
  )
}
