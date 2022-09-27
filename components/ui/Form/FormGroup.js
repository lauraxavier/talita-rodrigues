import { useState } from 'react'
import style from './Form.module.css'

export default function FormGroup(props) {
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
        const res = await fetch(`api/contact`, {
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
      <input
        id='name'
        type='text'
        value={inputs.name}
        onChange={handleChange}
        placeholder='Name'
        required
        />
      <input
        id='email'
        type="text"
        value={inputs.email}
        onChange={handleChange}
        placeholder='E-mail'
        required
        />
      <input
        id='phone'
        type="text"
        value={inputs.phone}
        onChange={handleChange}
        placeholder='Telefone'
        required
        />
      <textarea
        id='message'
        value={inputs.message}
        onChange={handleChange}
        placeholder='Deixe sua mensagem'
        required
      />
      <button type="submit" className={style.btnPrimary}>
        Enviar
      </button>
    </form> 

  )
}
