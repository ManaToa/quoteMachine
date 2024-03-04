import { configureStore, createSlice } from '@reduxjs/toolkit'
import { getRandomColor, getRandomQuote } from './functions'
import { QuoteType } from './quotes'

export interface QuoteState extends QuoteType {
  color: string
}

const initialQuote = getRandomQuote()

const quoteSlice = createSlice({
  name: 'quote-generator',
  initialState: {
    quote: initialQuote.quote,
    author: initialQuote.author,
    color: getRandomColor(),
  } as QuoteState,
  reducers: {
    updateQuoteData: state => {
      const { quote, author } = getRandomQuote()
      state.quote = quote
      state.author = author
      state.color = getRandomColor()
    },
  },
})

export const { updateQuoteData } = quoteSlice.actions

export const store = configureStore({
  reducer: quoteSlice.reducer,
})
