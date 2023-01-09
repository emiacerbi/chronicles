import { PrismaClient } from '@prisma/client'
import { ChroniclesClient } from '../config/axios'

type Hero = {
  name: string
  heroClass: string
  userId: string
}

export const createHero = async ({ name, heroClass, userId }: Hero) => {
  let body = JSON.stringify({
    name,
    heroClass,
    userId,
  })

  const response = await ChroniclesClient.post('/api/hero', body)
  return response
}

export const getHeroById = async (id: string) => {
  const response = await ChroniclesClient.get('/api/hero/' + id)
  return response
}

export const deleteHeroById = async (id: string) => {
  const response = await ChroniclesClient.delete('/api/hero/' + id)
  return response
}
