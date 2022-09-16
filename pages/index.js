import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from './components/Footer.js'
import Head from './components/Head.js'
import Button from './components/ui/Button/Button.js'

export default function Home() {
  return (
    <div>
      <Head />
      <Footer />
      <Button />
    </div>
  )
}
