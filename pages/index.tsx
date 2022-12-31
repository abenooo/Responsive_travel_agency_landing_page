import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import MainPage from '../components/MainPage'
import Destination from '../components/Destination'
import Notify from '../components/Notify'
const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Responsive Travel Landing Page</title>
        <link rel="icon" href="/pro.ico" />
      </Head>
      <div className='mx-auto container' >
        <Navbar /></div>
      <MainPage />
      <Services />
      <Destination />
      <Notify />
      <Footer />
    </div>
  )
}

export default Home
