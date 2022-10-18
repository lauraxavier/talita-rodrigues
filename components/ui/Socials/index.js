import style from './Socials.module.css'
import { FaFacebookF } from 'react-icons/fa';   
import { AiFillInstagram } from 'react-icons/ai';   


export default function Socials(props) {
    return (
        <div className={style.socialsGroup}>
            <a href='https://www.facebook.com/profile.php?id=100062930839704' rel="noreferrer" target="_blank">
                <FaFacebookF color="#268fbe" size="20px"/>
            </a>
            <a href='https://www.instagram.com/tali.consultoria/' rel="noreferrer" target="_blank">
                <AiFillInstagram color="#268fbe" size="20px" />
            </a>
        </div>

    )
}
