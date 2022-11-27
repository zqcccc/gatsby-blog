export function formatReadingTime(minutes: number) {
  minutes = Math.round(minutes)
  let cups = Math.round(minutes / 5)
  let bowls = 0
  if (cups > 5) {
    return `${new Array(Math.round(cups / Math.E))
      .fill('🍱')
      .join('')} ${minutes} min read`
  } else {
    return `${new Array(cups || 1).fill('☕️').join('')} ${minutes} min read`
  }
}

// `lang` is optional and will default to the current user agent locale
export function formatPostDate(date: string, lang: string) {
  if (typeof Date.prototype.toLocaleDateString !== 'function') {
    return date
  }

  const d = new Date(date)
  const args = [
    lang,
    { day: 'numeric', month: 'long', year: 'numeric' },
  ].filter(Boolean) as any
  return d.toLocaleDateString(...args)
}
