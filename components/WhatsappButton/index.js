import style from './WhatsappButton.module.css'
import { BsWhatsapp } from "react-icons/bs";


export default function Whatsapp() {
    return (
        <a href="https://web.whatsapp.com/send?phone=+5511958917345" rel="noreferrer" target="_blank" className={style.whatsappBtn}>
            <BsWhatsapp color="#3acf37" size="35px" />
        </a>
    )
}
