// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { Chronicle, PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'

const prisma = new PrismaClient()

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  switch (req.method) {
    case 'POST':
      return await createChronicle(req, res)
    case 'GET':
      return await getChronicles(req, res)
    case 'DELETE':
      return await deleteChronicles(req, res)
  }
}

const createChronicle = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = (await prisma.chronicle.create({
      data: req.body,
    })) as Chronicle

    prisma.$disconnect()

    return res.status(200).send(response)
  } catch (error) {
    return res.send({ message: error })
  }
}

const getChronicles = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await prisma.chronicle.findMany()

  prisma.$disconnect()

  return res.status(200).send(response)
}

const deleteChronicles = async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await prisma.chronicle.deleteMany()

  prisma.$disconnect()

  return res.status(200).send(response)
}
