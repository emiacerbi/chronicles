import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'GET':
      return await getHeroByUserId(req, res)
    case 'DELETE':
      return await deleteHeroById(req, res)
  }
}

const getHeroByUserId = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await prisma.hero.findFirst({
    where: { id: req.query.id as string },
  })

  prisma.$disconnect()
  return res.status(200).send(response)
}

const deleteHeroById = async (req: NextApiRequest, res: NextApiResponse) => {
  await prisma.chronicle.deleteMany()

  const response = await prisma.hero.delete({
    where: { id: req.query.id as string },
  })

  prisma.$disconnect()
  return res.status(200).send(response)
}
