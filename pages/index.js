import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Head from '../components/Head.js'
import { Footer, Header, Financing, Faq, About } from '../components'

export default function Home() {
  return (
    <>
      <Head />
      <Header />
      <Financing />
      <Faq />
      <About />
      <Footer />
    </>
  )
}
