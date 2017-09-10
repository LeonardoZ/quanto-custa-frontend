import diffInDays from 'date-fns/difference_in_days'
import format from 'date-fns/format'

export function parse(apiDate) {
  return new Date(apiDate)
}

export function parseToFormat(apiDate) {
  return format(parse(apiDate), "DD/MM/YYYY HH:mm:ss")
}


export function daysBetween(apiDateLater, apiDateEarlier) {
  let dateA = parse(apiDateLater)
  let dateB = parse(apiDateEarlier)
  return diffInDays(dateA, dateB)
}
