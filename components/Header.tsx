import Image from 'next/image'
import React from 'react'
import Button from './Button'
import { signOut } from 'next-auth/react'
import { User } from '../types'

type Props = {
  user: User
}

function Header({ user }: Props) {
  return (
    <div className="flex items-center gap-4 py-6">
      <h1 className="text-center text-3xl">Chronicles</h1>
      <p className="ml-auto">Welcome {user.name}</p>
      <Image
        src={user.image}
        alt={user.name}
        width={30}
        height={30}
        style={{
          borderRadius: '50%',
        }}
      />
      <Button onClick={() => signOut()}>Sign out</Button>
    </div>
  )
}

export default Header
