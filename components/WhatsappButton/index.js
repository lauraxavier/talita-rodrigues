import { useState , useEffect} from 'react'
import style from './WhatsappButton.module.css'
import { BsWhatsapp } from "react-icons/bs";

const mobileWts = "https://wa.me/5511958917345";
const webWts = "https://web.whatsapp.com/send?phone=+5548999339287";

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            function handleResize() {
                setWindowSize({
                    width: window.innerWidth,
                });
            }

            window.addEventListener("resize", handleResize);

            handleResize();

            return () => window.removeEventListener("resize", handleResize);
        }
    }, []); 
    return windowSize;
}

export default function Whatsapp(props) {
    const size = useWindowSize();
    
    return (
        <a href={size.width < 700 ? mobileWts : webWts } rel="noreferrer" target="_blank" className={style.whatsappBtn}>
            <BsWhatsapp color="#3acf37" size="35px" />
        </a>
    )
}

