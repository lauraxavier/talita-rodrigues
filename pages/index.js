import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Head from '../components/Head.js'
import { Button, Footer, Header, Financing } from '../components'

export default function Home() {
  return (
    <>
      <Head />
      <Header />
      <Financing />
    </>
  )
}
