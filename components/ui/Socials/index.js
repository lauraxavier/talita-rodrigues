import style from './Socials.module.css'
import { FaFacebookF } from 'react-icons/fa';   
import { AiFillInstagram } from 'react-icons/ai';   


export default function Socials(props) {
    return (
        <div className={style.socialsGroup}>
            <a href='https://www.facebook.com/profile.php?id=100062930839704' target="_blank">
                <FaFacebookF color="white" size="20px"/>
            </a>
            <a href='https://www.instagram.com/tali.consultoria/' target="_blank">
                <AiFillInstagram color="white" size="20px" />
            </a>
        </div>

    )
}
