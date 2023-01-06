import { NextPageContext } from 'next'
import { getSession, signIn } from 'next-auth/react'
import Button from '../components/Button'

function Login() {
  return (
    <div className="min-h-screen bg-neutral-900 text-neutral-100 grid place-content-center">
      <div className="flex flex-col gap-4">
        <h1>Sign in to continue</h1>
        <Button onClick={() => signIn('discord')}>Discord</Button>
      </div>
    </div>
  )
}

export default Login

export async function getServerSideProps(ctx: NextPageContext) {
  const user = await getSession(ctx)

  if (user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
