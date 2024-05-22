import { Person } from '@/sanity.types'

import SanityImage from '../sanity-image'
import Link from 'next/link'

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/X898aNHz1kj
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
export default function PersonList(props: {
  title: string
  persons: Person[]
}) {
  return (
    <section className="py-12 md:py-16 lg:py-20">
      <div className="container">
        <div className="mb-8 md:mb-10 lg:mb-12">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            {props.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:gap-8">
          {props.persons.map((person: Person) => (
            <div
              key={person._id}
              className="group relative overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg dark:bg-gray-800"
            >
              <div className="aspect-square overflow-hidden">
                <SanityImage
                  alt="Speaker 1"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  height={600}
                  image={person.image}
                  style={{
                    aspectRatio: '600/600',
                    objectFit: 'cover',
                  }}
                  width={600}
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-gray-50">
                  {person.firstName} {person.lastName}
                </h3>
                {person.username && (
                  <Link
                    href={person.username.link}
                    className="text-gray-500 dark:text-gray-400"
                  >
                    {person.username.text}
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
