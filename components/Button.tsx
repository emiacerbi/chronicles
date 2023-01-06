import { MouseEventHandler, ReactNode } from 'react'

type Props = {
  children: ReactNode
  onClick: MouseEventHandler<HTMLButtonElement>
}

const defaultOnClick = () => {
  console.log('Add your onlick!')
}

function Button({ children, onClick = defaultOnClick }: Props) {
  return (
    <button
      className="border px-3 py-1 rounded-lg hover:bg-neutral-700 duration-200 transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
