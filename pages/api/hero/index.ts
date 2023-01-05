// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST':
      return await createHero(req, res)
    case 'GET':
      return await getHeroes(req, res)
  }
}

const createHero = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await prisma.hero.create({
      data: req.body,
    })

    prisma.$disconnect()

    return res.status(200).send(response)
  } catch (error) {
    return res.send({ message: error })
  }
}

const getHeroes = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await prisma.hero.findMany()

  prisma.$disconnect()

  return res.status(200).send(response)
}
