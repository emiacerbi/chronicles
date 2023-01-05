import { ChroniclesClient } from '../config/axios'

type Hero = {
  name: string
  heroClass: string
}

export const createHero = async ({ name, heroClass }: Hero) => {
  let body = JSON.stringify({
    name,
    heroClass,
  })

  const response = await ChroniclesClient.post('/api/hero', body)
  return response
}
