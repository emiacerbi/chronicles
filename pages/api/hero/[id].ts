// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
  }
}

const getHeroByUserId = async (req: NextApiRequest, res: NextApiResponse) => {
  const idAsNumber = req.query.id as string
  const response = await prisma.hero.findFirst({
    where: { id: parseInt(idAsNumber) },
  })

  prisma.$disconnect()
  return res.status(200).send(response)
}
