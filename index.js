import Head from 'next/head'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white p-4">
      <Head>
        <title>Funzi Reels</title>
      </Head>
      <h1 className="text-3xl font-bold mb-4">Funzi Reels (Demo)</h1>
      <p>Instagram-style vertical scroll coming soon...</p>
    </div>
  )
}
