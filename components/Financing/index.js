import style from './Financing.module.css'
import styles from '../../styles/Home.module.css'
import { Card } from '../ui'
import {items} from './cardContent.js'

export default function Financing(props) {
    return (
        <div className={style.financingContainer}> 
            <div className={style.divider}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={style.shapeFill}></path>
                </svg>
            </div>
            <div className={style.dividerOpacity}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className={style.fillOpacity}></path>
                </svg>
            </div>
            <div className={style.titleFinancing}>
                <h1>
                    Tipos de<br />consórcio <strong> para <br /> você! </strong> 
                </h1>
            </div>
            <div className={style.slideContainer}>
                {items.map((item, index) => (
                    <Card key={index}
                    icon= {item.icon}
                    title= {item.title}
                    content= {item.content}
                    />
                    ))
                }
            </div>
             
        </div>
    )
}
