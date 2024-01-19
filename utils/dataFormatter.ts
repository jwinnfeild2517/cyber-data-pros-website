export const getDateFormat = (str: string) => {
  const date = new Date(str)
  const formattedDate = date.toLocaleString('default', {
    month: 'long',
    day: '2-digit',
    year: 'numeric',
  })
  return formattedDate
}
