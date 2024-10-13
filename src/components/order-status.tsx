import { z } from 'zod'

export const orderStatusSchema = z.enum([
  'pending',
  'canceled',
  'processing',
  'delivering',
  'delivered',
])

export type OrderStatus = z.infer<typeof orderStatusSchema>

interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  processing: 'Em preparo',
  delivering: 'Em entrega',
  delivered: 'Entregue',
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      {status === 'pending' && (
        <div className="h-2 w-2 rounded-full bg-slate-400" />
      )}
      {status === 'canceled' && (
        <div className="h-2 w-2 rounded-full bg-rose-500" />
      )}
      {status === 'processing' && (
        <div className="h-2 w-2 rounded-full bg-amber-500" />
      )}
      {status === 'delivering' && (
        <div className="h-2 w-2 rounded-full bg-amber-500" />
      )}
      {status === 'delivered' && (
        <div className="h-2 w-2 rounded-full bg-emerald-500" />
      )}

      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
