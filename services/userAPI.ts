import { ChroniclesClient } from '../config/axios'
import { User } from '../types'

export const createUser = async ({ name }: User) => {
  let body = JSON.stringify({
    name,
  })

  const response = await ChroniclesClient.post('/api/user', body)
  return response
}
