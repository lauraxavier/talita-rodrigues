import React from 'react'
import style from './Header.module.css'
import Image from 'next/image'
import { ContactForm } from '../../components'
import styles from '../../styles/Home.module.css'
import { Socials } from '../ui'


export default function Header(props) {
  return (
    <header className={style.header}>
      <div className={styles.grid}>
        <div className={style.hearderGroup}>
          <div className={style.imageContainer}>
            <Image
              src="/img/profile.png"
              alt="Foto de Talita Rodrigues consultora de crédito"
              width={750}
              height={650}
            />      
          </div>
          <div className={style.formContainer}>
            <ContactForm />
            <div className={style.socialsContainer}>
              <Socials /> 
            </div>
          </div>
        </div>
      </div> 

      
    </header>
  )
}
