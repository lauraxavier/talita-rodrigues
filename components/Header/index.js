import React from 'react'
import styles from '../../styles/Home.module.css'
import style from './Header.module.css'
import {Form} from '../ui'
import Image from 'next/image'


export default function Header(props) {
  return (
    <header className={style.header}>
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
          <Form />
        </div>
      </div>
      
    </header>
  )
}
