
import Banner from '@/components/Banner'
import Courses from '@/components/Courses'
import { NextPage } from 'next'
import { Inter } from 'next/font/google'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })


const Home : NextPage = ()=>{
  return (
    <div>
      <Head>
        <title>Open and Distance Learning, University of Calabar.</title>
        <link rel="icon" href="/logosm.png" />
      </Head>

      <main>
        <Banner/>
        <Courses/>
      </main>
    </div>
  )
}

export default Home
