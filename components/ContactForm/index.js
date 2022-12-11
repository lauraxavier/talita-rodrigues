import { useState } from 'react'
import style from './ContactForm.module.css'
import { Input, Button } from '../ui'


export default function ContactForm(props) {
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    const [form, setForm] = useState('')

    const handleChange = (e) => {
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }))
    }

    const onSubmitForm = async (e) => {
        e.preventDefault()

        if (inputs.name && inputs.email && inputs.phone && inputs.message) {
            setForm({ state: 'loading' })
            try {
                const res = await fetch(`api/hello`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(inputs),
                })

                const { error } = await res.json()

                if (error) {
                    setForm({
                        state: 'error',
                        message: error,
                    })
                    return
                }

                setForm({
                    state: 'success',
                    message: 'Sua mensagem foi enviada com sucesso !',
                })

                setInputs({
                    name: '',
                    email: '',
                    phone: '',
                    message: '',
                })
            } catch (error) {
                setForm({
                    state: 'error',
                    message: 'Algo deu errado',
                })
            }
        }
    }

    return (
        <form onSubmit={(e) => onSubmitForm(e)} className={style.formGroup}>
            <div className={style.formContainer}>
                <div className={style.titleContainer}>
                    <h1>tire suas duvidas</h1>
                    <h2>Preencha o formulário abaixo e em breve entrarei em contato.</h2>
                </div>
                <Input
                    id='name'
                    value={inputs.name}
                    type='text'
                    placeholder='Nome'
                    onChange={handleChange}
                />
                <Input
                    id='email'
                    value={inputs.email}
                    type='text'
                    placeholder='E-mail'
                    onChange={handleChange}
                />
                <Input
                    id='phone'
                    value={inputs.phone}
                    type='text'
                    placeholder='Telefone'
                    onChange={handleChange}
                />
                <textarea
                    id='message'
                    value={inputs.message}
                    placeholder='Deixe sua mensagem'
                    onChange={handleChange}
                />
                <Button type="submit">
                    Enviar
                </Button>
            </div>
        </form>
    )
}