import { Hero } from '@/sanity.types'

type Header = Hero['header']

export const Header = (props: Header) => {
  return (
    <div className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold dark:text-white">
        {props?.title}
      </h1>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        {props?.description}
      </p>
    </div>
  )
}
