import React from 'react'
import style from './Profile.module.css'

export default function Profile(props) {
  return (
    <div className={style.Profile}>
      <figure className={style.ImgContainer}>
        <img src="/img/imgPrimary.png"  alt="Foto de Talita Rodrigues"/>
      </figure>
      <figcaption className={style.Title}>
        <h1>
          Talita
        </h1>
        <h1>
          Rodrigues
        </h1>
        <h2>
          Especialista em crédito
        </h2>
      </figcaption>
    </div>
  )
}
