import Head from 'next/head'
import { createHero } from '../services/heroAPI'
import Image from 'next/image'
import Wrapper from '../components/Wrapper'
import { heroes } from '../config/constants'
import { getSession, signOut } from 'next-auth/react'
import { NextPageContext } from 'next'
import Button from '../components/Button'
import { PrismaClient } from '@prisma/client'
import { useRouter } from 'next/router'

type Props = {
  user: {
    id: string
    name: string
    image: string
    email: string
  }
}

export default function Home({ user }: Props) {
  const router = useRouter()
  const handleClick = async () => {
    const response = await createHero({
      name: 'Carlos',
      heroClass: 'Hunter',
      userId: user.id,
    })

    if (response.status === 200) {
      router.reload()
    }
  }

  return (
    <>
      <Head>
        <title>Chronicles</title>
        <meta name="description" content="Personal project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-neutral-900 text-neutral-100">
        <Wrapper>
          <div className="min-h-screen flex flex-col py-10">
            <div className="flex items-center gap-4">
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
            <div className="flex flex-col justify-center gap-8 flex-1">
              <p className="text-center">Select a hero to start</p>
              <section className="flex w-full justify-between">
                {heroes.map((hero) => (
                  <article
                    key={hero.id}
                    className="flex flex-col gap-4"
                    onClick={handleClick}
                  >
                    <div className="relative shadow-lg w-64 h-80 border-2 border-neutral-100 rounded-lg overflow-hidden duration-300 transition-transform hover:-translate-y-1">
                      <Image
                        src={hero.avatar}
                        alt={hero.description}
                        fill
                        style={{
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                    <p className="text-center text-xl tracking-widest">
                      {hero.name}
                    </p>
                  </article>
                ))}
              </section>
            </div>
          </div>
        </Wrapper>
      </main>
    </>
  )
}

export async function getServerSideProps(ctx: NextPageContext) {
  const prisma = new PrismaClient()

  const data = await getSession(ctx)

  console.log({ data })

  if (!data) {
    return {
      redirect: {
        destination: '/login',
      },
    }
  }

  const user = await prisma.user.findFirst({
    where: { email: data.user?.email },
  })

  console.log({ user })

  const userId = user?.id

  const heroes = await prisma.hero.findFirst({
    where: { userId: userId },
  })

  console.log({ heroes })

  prisma.$disconnect()

  if (heroes) {
    return {
      redirect: {
        destination: '/dashboard',
      },
    }
  }

  if (data.user) {
    return {
      props: { user },
    }
  }
}
