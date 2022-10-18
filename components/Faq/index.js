import { useState } from 'react'
import style from './Faq.module.css'
import styles from '../../styles/Home.module.css'
import { Faq } from '../ui'
import { questions } from './faqQuestions.js'
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

export default function Questions(props) {
    const [open, setOpen] = useState(false);
    const [dropDownIdOpen, setDropDownIdOpen] = useState(null);
 
    function handleOpenDropDown(i) {
        if (!open && dropDownIdOpen === null) {
            setOpen(true);
            setDropDownIdOpen(i);
        } else if (open && dropDownIdOpen != i) {
            setDropDownIdOpen(i);
        } else {
            setOpen(false);
            setDropDownIdOpen(null);
        }
    }
    return (
        <div className={style.faqContainer}> 
            <div className={styles.grid}>
                <div className={style.questionsContainer}>
                    <h1>
                        Saiba mais como<br /><strong>funciona</strong>
                    </h1>
                    <div className={style.questionsContent} >
                        {
                            questions.map((item, id) => (
                                <Faq 
                                    content={open && item.id === dropDownIdOpen ? item.content() : ""}
                                    onClick={() => handleOpenDropDown(item.id)}
                                    key={item.id}
                                    title={item.title}
                                    icon={open && item.id === dropDownIdOpen ? <AiOutlineMinus color="#FF8E2D" size="20px" /> : <AiOutlinePlus color="#FF8E2D" size="20px" />}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>   
        </div>
    )
}



