import style from './Button.module.css'

export default function btnPrimary(props) {
    return (
        <button type={props.type} className={style.btnPrimary}>
            {props.children}
        </button>

    )
}
