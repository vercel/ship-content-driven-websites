import { GridHighlightCard } from './card'

interface GridHighlightProps {
  cards: any[]
}

export function GridHighlight({ cards }: GridHighlightProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 p-4">
      {cards.map((card) => (
        <GridHighlightCard key={card._key} {...card} />
      ))}
    </div>
  )
}
