import React from 'react'
import style from './Profile.module.css'
import Image from 'next/image'


export default function Profile(props) {
  return (
    <div className={style.Profile}>
      <figure className={style.ImgContainer}>
        <Image
          src="/img/imgPrimary.png"
          alt="Foto de Talita Rodrigues"
          width={600}
          height={600}
          />
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
