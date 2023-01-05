import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Chronicles</title>
        <meta name="description" content="Personal project" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-neutral-900 text-neutral-100 grid place-content-center">
        <h1 className="">Chronicles</h1>
      </main>
    </>
  )
}
