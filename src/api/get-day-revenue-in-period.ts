import { api } from '@/lib/axios'

export interface GetDayRevenueInPeriodParams {
  from?: Date
  to?: Date
}

export type GetDayRevenueInPeriodResponse = {
  date: string
  revenue: number
}[]

export async function getDayRevenueInPeriod({
  from,
  to,
}: GetDayRevenueInPeriodParams) {
  const response = await api.get<GetDayRevenueInPeriodResponse>(
    '/metrics/daily-revenue-in-period',
    { params: { from, to } },
  )

  return response.data
}
