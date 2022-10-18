import style from './Faq.module.css'

export default function Faq(props) {
    return (
        <div onClick={props.onClick}>
            <div className={style.faqShowMore}>
                <div className={style.faqTitleContainer}>
                    <h2>
                        {props.title}
                    </h2>
                    <div className={style.faqIconContainer}>
                        {props.icon}
                    </div>
                </div>
                <div className={style.faqContent}>
                    {props.content}
                </div>
            </div>
        </div>
    )
}
