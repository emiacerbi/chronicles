import { ReactNode } from 'react'
import Wrapper from './Wrapper'

type Props = {
  children: ReactNode
}

function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100">
      <Wrapper>{children}</Wrapper>
    </div>
  )
}

export default Layout
