import { http, HttpResponse } from 'msw'

import { GetDayRevenueInPeriodResponse } from '../get-day-revenue-in-period'

export const getDayRevenueInPeriodMock = http.get<
  never,
  never,
  GetDayRevenueInPeriodResponse
>('/metrics/daily-revenue-in-period', async () => {
  return HttpResponse.json([
    { date: '01/01/2024', revenue: 2000 },
    { date: '02/01/2024', revenue: 800 },
    { date: '03/01/2024', revenue: 5000 },
    { date: '04/01/2024', revenue: 540 },
    { date: '05/01/2024', revenue: 400 },
    { date: '06/01/2024', revenue: 700 },
    { date: '07/01/2024', revenue: 2000 },
  ])
})
