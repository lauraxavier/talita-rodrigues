import { useState } from 'react'
import style from './About.module.css'
import Image from 'next/image'
import styles from '../../styles/Home.module.css'

export default function About(props) {
    return (
        <div className={style.aboutContainer}>
            <div className={style.aboutDividerTop}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={style.shapeFillAbout}></path>
                </svg>
            </div>
            <div className={style.aboutDividerTopOpacity}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={style.shapeFillAboutOpacity}></path>
                </svg>
            </div>
            <div className={styles.grid}>
                <div className={style.aboutContent}>
                    <div className={style.aboutText}>
                        <h1>
                            Sobre <br />Mim
                        </h1>
                        <h2>
                            Consultora especialista em <br />crédito
                        </h2>
                        <p>
                            <strong>Apaixonada</strong> pelo que faço e mãe de 3 meninas lindas.
                            <br />Com mais de 5 anos de experiência. Procuro de uma forma bem próxima auxiliar desde os primeiros planejamentos até a entrega. 
                            <br/>Sempre sanando duvidas e procurando o que melhor se encaixa para cada cliente. 
                        </p>
                        <p>
                            Sou especialista em aquisição de Imóveis, Automóveis, Automotivos, Aeronaves, Náuticos, Jet-skis, Lanchas, Barcos e etc. <br /> 
                            <strong>Especialista em crédito para o Agronegócio:</strong> Maquinários, Pulverizadores, Aeronaves, Aviônicos, peças e afins.
                        </p>
                        <p>
                            Busco ter uma relação próxima com meus clientes para poder entende-los e realizar um planejamento exclusivo e seguro.
                        </p>
                        <p>
                            Conte comigo para tirar seu <strong>Sonho</strong> do papel ! 
                        </p>
                    </div>
                    <div className={style.imgAboutContainer}>
                        <Image
                            src="/img/imgAbout.png"
                            alt="Foto de Talita Rodrigues consultora de crédito"
                            width={500}
                            height={450}
                        />   
                    </div>
                </div>
            </div>
            
        </div>
    )
}



