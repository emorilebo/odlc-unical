import About from "@/components/About";
import Banner from "@/components/Banner";
import Contact from "@/components/Contact";
import Courses from "@/components/Courses";
import Odlcform from "@/components/Odlcform";
import Team from "@/components/Team";
import { NextPage } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Open and Distance Learning, University of Calabar.</title>
        <link rel="icon" href="/logosm.png" />
      </Head>

      <main className="bg-white">
        <Banner />
        <div className="text-center my-12">
          <h2 className="text-3xl font-extrabold tracking-tight text-red-500 sm:text-4xl">
            About ODLC, University of Calabar.
          </h2>
        </div>
        <About />
        <Courses />
        <Odlcform />
        <Team />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
