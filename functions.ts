import quoteList from './quotes'

export function getRandomQuote() {
  return quoteList[Math.floor(Math.random() * quoteList.length)]
}

export function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}
