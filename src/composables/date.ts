export const useDate = () => {
  /**
   * Returns locale-based relative time string. Ex.: '6 days ago', 'in 5 minutes', 'next year'
   * @param {Date | number} date Date object or number of MS
   * @param {string} [lang] Locale
   * @returns {string}
   */
  function getRelativeTimeString(date: Date | number, lang = navigator.language) {
    const timeMS = typeof date === 'number' ? date : date.getTime()
    const deltaSeconds = Math.round((timeMS - Date.now()) / 1000)
    const cutoffs = [
      60,
      3600,
      86400,
      86400 * 7,
      86400 * 30,
      86400 * 365,
      Infinity,
    ]
    const units = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year']

    const unitIndex = cutoffs.findIndex(
      (cutoff) => cutoff > Math.abs(deltaSeconds)
    )

    const divisor = unitIndex ? cutoffs[unitIndex - 1] : 1

    const rtf = new Intl.RelativeTimeFormat(lang, { numeric: 'auto' })

    return rtf.format(Math.floor(deltaSeconds / divisor), <"year" | "years" | "quarter" | "quarters" | "month" | "months" | "week" | "weeks" | "day" | "days" | "hour" | "hours" | "minute" | "minutes" | "second" | "seconds">units[unitIndex])
  }

  return { getRelativeTimeString }

}