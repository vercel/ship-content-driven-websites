import { SpotlightHeader } from './spotlight-header'

interface SpotlightProps {
  title: string
  description?: string
  spotlight: string
  fill: string
}

export function Spotlight({
  title,
  description,
  spotlight,
  fill,
}: SpotlightProps) {
  return (
    <div className="flex md:h-[40rem] w-full rounded-md md:items-center md:justify-center bg-background/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <SpotlightHeader
        className="-top-40 left-0 md:left-60 md:-top-20 hidden md:block"
        fill={fill}
      />
      <div className="p-4 max-w-7xl mx-auto relative z-10 w-full pt-20 md:pt-0">
        <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-black to-black dark:from-neutral-50 dark:to-neutral-400 bg-opacity-50">
          {spotlight} <br /> {title}.
        </h1>
        <p className="mt-4 font-normal text-base dark:text-neutral-300 max-w-lg text-center mx-auto">
          {description}
        </p>
      </div>
    </div>
  )
}
