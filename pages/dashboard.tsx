import { Chronicle, PrismaClient } from '@prisma/client'
import { InferGetServerSidePropsType, NextPageContext } from 'next'
import { getSession } from 'next-auth/react'
import { Hero, User } from '../types'
import Header from '../components/Header'
import Layout from '../components/Layout'
import Image from 'next/image'
import { heroImg } from '../config/constants'

function Protected({
  hero,
  user,
  chronicles,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const imageSrc = heroImg[hero.heroClass as keyof typeof heroImg]

  return (
    <Layout>
      <Header user={user} />
      <div className="flex mt-10 gap-6">
        <div className="relative shadow-lg w-44 h-56 border-2 border-neutral-100 rounded-lg overflow-hidden">
          <Image
            src={imageSrc}
            alt={'desc'}
            fill
            style={{
              objectFit: 'cover',
            }}
          />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-xl">Hero Info</h3>
          <p>
            <span className="font-bold">Name:</span> {hero.name}
          </p>
          <p>
            <span className="font-bold">Class:</span> {hero.heroClass}
          </p>
          <p>
            <span className="font-bold">Level:</span> apprentice
          </p>
          <p>
            <span className="font-bold">Actions left:</span> 3
          </p>
          <button className="bg-transparent mt-auto border border-red-500 text-red-500 py-2 px-6 rounded-lg">
            Delete your hero
          </button>
        </div>

        <div className="ml-auto flex flex-col justify-between">
          <p className="font-bold text-xl">Actions</p>
          <p className="border-2 border-white rounded-lg px-6 py-2">Battle</p>
          <p className="border-2 border-white rounded-lg px-6 py-2">
            Class action
          </p>
          <p className="border-2 border-white rounded-lg px-6 py-2">Rest</p>
        </div>
      </div>
      <div className="flex flex-col gap-6 mt-10">
        <h3>Latest chronicles: </h3>
        {chronicles.map((chronicle) => (
          <div className="border rounded-lg w-full p-4" key={chronicle.id}>
            <p>{chronicle.content}</p>
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Protected

export async function getServerSideProps(ctx: NextPageContext) {
  const prisma = new PrismaClient()

  const data = await getSession(ctx)

  if (!data) {
    return {
      redirect: {
        destination: '/login',
      },
    }
  }

  const user = (await prisma.user.findFirst({
    where: { email: data.user?.email },
  })) as User

  const userId = user?.id

  const hero = (await prisma.hero.findFirst({
    where: { userId: userId },
  })) as Hero

  const chronicles = (await prisma.chronicle.findMany()) as Chronicle[]

  return {
    props: { hero, user, chronicles },
  }
}
