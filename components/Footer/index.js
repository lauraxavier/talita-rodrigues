import style from './Footer.module.css'
import styles from '../../styles/Home.module.css'
import { Socials } from '../ui'


export default function Footer() {
  return (
    <footer className={style.footerContainer}>
      <div className={style.footerDividerTop}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={style.shapeFillfooter}></path>
        </svg>
      </div>
      <div className={style.footerDividerTopOpacity}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={style.shapeFillfooterOpacity}></path>
        </svg>
      </div>
      <div className={styles.grid}>
        <div className={style.footerContent}>
          <h1>
            Atendimento ao<br /><strong>Cliente</strong>
          </h1>
          <div className={style.footerContacts}>
            <div className={style.footerWts}>
              <h2>
                Whatsapp
              </h2>
              <span>
                (11) 995891-7345
              </span>
            </div>
            <div className={style.email}>
              <h2>
                E-mail
              </h2>
              <span>
                talita.rfreire@outlook.com
              </span>
            </div>
          </div>
          <div className={style.socialsMedia}>
            <h2>Me siga nas <br/>redes <br/><strong>sociais</strong> </h2>
            <div className={style.socialsContainer}>
              <Socials />
            </div>
          </div>
        </div>

      </div>
      <div className={style.copyrights}>
        © Copyrights 2022, Laura Xavier
      </div>
    </footer>
  )
}
