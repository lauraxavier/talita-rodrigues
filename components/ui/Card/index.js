import style from './Card.module.css'
import Image from 'next/image'

export default function Card(props) {
    return (
        <div className={style.card}>
            <h1>
               {props.title}
            </h1>
            <p>
                {props.content}
            </p>    
            <div className={style.iconContainer}>
                <Image
                    src={props.icon}
                    width={50}
                    height={50}
                    className={style.icon}
                    alt=''
                />
            </div>
        </div>

    )
}
