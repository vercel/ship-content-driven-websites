import { Check } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { GridHighlight as GridHighlightProps } from '@/sanity.types'

type GridHighlightCardProps = React.ComponentProps<typeof Card> &
  NonNullable<NonNullable<GridHighlightProps['cards']>[number]>

export function GridHighlightCard({
  title,
  description,
  bullets,
  cta,
  ...cardProps
}: GridHighlightCardProps) {
  return (
    <Card {...cardProps}>
      <CardHeader>
        <CardDescription>{description}</CardDescription>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent className="grid grid-rows-3">
        {bullets?.map((bullet) => (
          <div
            key={bullet._key}
            className="mb-4 grid grid-cols-[25px_1fr] items-start last:mb-0 last:pb-0"
          >
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-white" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none">{bullet.text}</p>
            </div>
          </div>
        ))}
      </CardContent>
      {cta && (
        <CardFooter>
          <Button className="w-full">
            <Check className="mr-2 h-4 w-4" /> {cta.label}
          </Button>
        </CardFooter>
      )}
    </Card>
  )
}
