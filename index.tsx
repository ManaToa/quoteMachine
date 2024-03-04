import { Provider, useDispatch, useSelector } from 'react-redux'
import { FaQuoteLeft, FaXTwitter } from 'react-icons/fa6'
import { FaTumblr } from 'react-icons/fa'
import { updateQuoteData, store, QuoteState } from './redux'

interface QuoteButtonProps {
  label?: string
  href: string
  icon?: JSX.Element
  color: string
}

function QuoteButton({ label, href, icon, color }: QuoteButtonProps) {
  return (
    <a
      href={href}
      target='_blank'
      className='inline-block p-2 rounded-sm mr-3 text-lightColor w-[2rem] h-[2rem]'
      style={{ backgroundColor: color }}
    >
      {icon || label || 'X'}
    </a>
  )
}

function QuoteMachineBox() {
  const quote = useSelector((state: QuoteState) => state.quote)
  const author = useSelector((state: QuoteState) => state.author)
  const color = useSelector((state: QuoteState) => state.color)
  const dispatch = useDispatch()
  return (
    <div>
      <div
        style={{ color: color }}
        className='bg-lightColor p-3 md:p-5 rounded-md shadow-xl w-full md:w-[90%] mx-auto'
      >
        <div className='mb-3 text-center'>
          <FaQuoteLeft className='text-xl inline-block mr-1 mb-3' />
          {quote}
        </div>
        <div className='text-right mb-3'>- {author}</div>
        <div className='flex justify-between mt-8'>
          <div>
            <QuoteButton
              href={`https://twitter.com/intent/tweet?hashtags=quotes&text="${quote}" - ${author}`}
              icon={<FaXTwitter />}
              color={color}
            />
            <QuoteButton
              href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes&caption=${author}&content=${quote}&canonicalUrl=https://www.tumblr.com/buttons&shareSource=tumblr_share_button`}
              icon={<FaTumblr />}
              color={color}
            />
          </div>

          <button
            style={{ backgroundColor: color }}
            className='p-2 rounded-sm mr-1 text-lightColor h-[2rem] flex items-center text-xs sm:text-base'
            onClick={() => dispatch(updateQuoteData())}
          >
            Nouvelle Citation
          </button>
        </div>
      </div>
    </div>
  )
}

export default function QuoteMachine() {
  return (
    <Provider store={store}>
      <QuoteMachineBox />
    </Provider>
  )
}
