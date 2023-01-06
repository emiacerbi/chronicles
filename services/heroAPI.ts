import { ChroniclesClient } from '../config/axios'

type Hero = {
  name: string
  heroClass: string
}

export const createHero = async ({ name, heroClass }: Hero) => {
  let body = JSON.stringify({
    name,
    heroClass,
    userId: 2,
  })

  const response = await ChroniclesClient.post('/api/hero', body)
  return response
}

export const getHeroById = async (id: number) => {
  const response = await ChroniclesClient.get('/api/hero/' + id)
  return response
}