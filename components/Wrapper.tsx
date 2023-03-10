import { ReactNode } from 'react'

type Props = {
  children: ReactNode
}

function Wrapper({ children }: Props) {
  return <div className="max-w-screen-md mx-auto">{children}</div>
}

export default Wrapper
