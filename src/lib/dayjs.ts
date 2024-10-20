import 'dayjs/locale/pt-br'

import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'

import { ptBR } from '@/config/localeCalendarConfig'

dayjs.locale('pt-br')
dayjs.extend(updateLocale)
dayjs.extend(relativeTime)

dayjs.updateLocale('pt-br', {
  months: ptBR.monthNames,
})
