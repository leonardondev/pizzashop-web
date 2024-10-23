import { Skeleton } from '@/components/ui/skeleton'

export function PopularSkeleton() {
  return (
    <>
      <Skeleton className="mt-1 h-7 w-36" />
      <Skeleton className="h-5 w-56 rounded-full" />
    </>
  )
}
