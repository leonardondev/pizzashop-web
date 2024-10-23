import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'
import { Loader2 } from 'lucide-react'
import { useMemo, useState } from 'react'
import { DateRange } from 'react-day-picker'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts'
import colors from 'tailwindcss/colors'

import { getDayRevenueInPeriod } from '@/api/get-day-revenue-in-period'
import { DateRangePicker } from '@/components/date-range-picker'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Label } from '@/components/ui/label'

export function RevenueChart() {
  const [dateRange, setDateRange] = useState<DateRange | undefined>({
    from: dayjs().subtract(7, 'days').toDate(),
    to: new Date(),
  })

  const { data: dailyRevenueInPeriod } = useQuery({
    queryKey: ['metrics', 'revenue-in-period', dateRange],
    queryFn: () =>
      getDayRevenueInPeriod({ from: dateRange?.from, to: dateRange?.to }),
  })

  const chartData = useMemo(() => {
    return dailyRevenueInPeriod?.map((chartItem) => {
      return {
        date: chartItem.date,
        revenue: chartItem.revenue / 100,
      }
    })
  }, [dailyRevenueInPeriod])

  return (
    <Card className="col-span-6">
      <CardHeader className="flex-row items-center justify-between pb-8">
        <div className="space-y-1">
          <CardTitle className="bg- text-base font-medium">
            Receita no período
          </CardTitle>
          <CardDescription>Receita diária no período</CardDescription>
        </div>

        <div className="flex items-center gap-3">
          <Label />
          <DateRangePicker date={dateRange} onDateChange={setDateRange} />
        </div>
      </CardHeader>
      <CardContent>
        {dailyRevenueInPeriod ? (
          <ResponsiveContainer width="100%" height={240}>
            <LineChart data={chartData} style={{ fontSize: 12 }}>
              <CartesianGrid vertical={false} className="stroke-muted" />
              <Line
                dataKey="revenue"
                type="linear"
                strokeWidth={2}
                stroke={colors.violet[500]}
              />
              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                dy={16}
                aria-label="Data"
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                dx={-4}
                width={80}
                stroke="#888"
                tickFormatter={(value: number) =>
                  value.toLocaleString('pr-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  })
                }
                aria-label="Valor da receita"
              />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex h-[240px] w-full items-center justify-center">
            <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
          </div>
        )}
      </CardContent>
    </Card>
  )
}
