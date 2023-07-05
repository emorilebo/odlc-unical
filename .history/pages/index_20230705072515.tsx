
import { NextPage } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

// export default function Home() {
//   return (
//     <main
//       className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
//     >
     
//     </main>
//   )
// }

const Home : NextPage = ()=>{
  return (
    <div>
      <Head>
        <title>Open and Distance Learning, University of Calabar.</title>
        <link>
      </Head>
    </div>
  )
}

export default Home
