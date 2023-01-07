import { ChroniclesClient, GPTClient } from '../config/axios'

type Params = {
  prompt: string
  heroId: string
}

export const createChronicle = async ({ prompt, heroId }: Params) => {
  const chatBody = JSON.stringify({
    model: 'text-davinci-003',
    prompt: prompt,
    temperature: 0,
    max_tokens: 500,
  })

  const chatResponse = await GPTClient.post('/completions', chatBody)

  const chronicle = chatResponse.data.choices[0].text

  const chronicleBody = JSON.stringify({
    heroId,
    content: chronicle,
  })

  const chronicleResponse = await ChroniclesClient.post(
    '/api/chronicle',
    chronicleBody
  )

  return chronicleResponse
}
