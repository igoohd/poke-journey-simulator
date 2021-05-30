import NextHead from 'next/head'

export function Head() {
  return (
    <NextHead>
      <title>Pokémon - Journey</title>
      <meta name="description" content="Your pokemon journey simulator" />
      <link rel="icon" href="/favicon.ico" />
    </NextHead>
  )
}