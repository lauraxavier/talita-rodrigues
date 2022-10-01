import style from './Input.module.css'

export default function Input(props) {
    return (
        <input
            id={props.id}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            placeholder={props.placeholder}
            className={style.input}
        />

    )
}
