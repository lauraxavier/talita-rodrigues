import React from 'react'
import styles from '../../styles/Home.module.css'
import style from './Header.module.css'
import { Profile } from '../../components'


export default function Header(props) {
  return (
    <header className={style.header}>
      <div className={style.logoProfile}>
        <Profile />
      </div>
      <h1>
        form
      </h1>
    </header>
  )
}
