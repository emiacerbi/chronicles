import Head from 'next/head'
import { createHero } from '../services/heroAPI'
import Image from 'next/image'
import Wrapper from '../components/Wrapper'
import { heroes } from '../config/constants'

export default function Home() {
  const handleClick = async () => {
    const response = await createHero({
      name: 'Carlos',
      heroClass: 'Hunter',
    })

    console.log(response)
  }
  return (
    <>
      <Head>
        <title>Chronicles</title>
        <meta name="description" content="Personal project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-neutral-900 text-neutral-100">
        <Wrapper>
          <div className="min-h-screen flex flex-col py-10">
            <h1 className="text-center text-5xl">Chronicles</h1>
            <div className="flex-1 grid place-content-center">
              <section className="flex gap-20 mt-10">
                {heroes.map((hero) => (
                  <article
                    key={hero.id}
                    className="grid gap-4"
                    onClick={handleClick}
                  >
                    <div className="relative shadow-lg w-64 h-80 border-2 border-neutral-100 rounded-lg overflow-hidden duration-300 transition-transform hover:-translate-y-1">
                      <Image
                        src={hero.avatar}
                        alt={hero.description}
                        fill
                        style={{
                          objectFit: 'cover',
                        }}
                      />
                    </div>
                    <p className="text-center text-xl tracking-widest">
                      {hero.name}
                    </p>
                  </article>
                ))}
              </section>
            </div>
          </div>
        </Wrapper>
      </main>
    </>
  )
}
