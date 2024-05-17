import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet'
import { HomePageQueryResult, PagesBySlugQueryResult } from '@/sanity.types'

export function PreviewDataSheet({
  data,
}: {
  data: PagesBySlugQueryResult | HomePageQueryResult
}) {
  return (
    <div className="hidden lg:block">
      <Sheet>
        <SheetTrigger asChild>
          <Button className="absolute bottom-4 right-4" variant="outline">
            Open Preview Data
          </Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Preview Data</SheetTitle>
          </SheetHeader>
          <div className="py-4 max-w-4xl">{JSON.stringify(data, null, 2)}</div>
          <SheetFooter>
            <SheetClose asChild>
              <Button type="submit">Close</Button>
            </SheetClose>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  )
}
