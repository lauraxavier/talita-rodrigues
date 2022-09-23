import React from 'react'
import style from './Form.module.css'
import Button from '../Button'

export default function Form(props) {
  return (
    <div className={style.formContainer}>
      <div className={style.titleContainer}> 
        <h1>tire suas duvidas</h1>
        <h2>Preencha o formulário abaixo e em breve entrarei em contato.</h2>
      </div>
      <div className={style.formGroup}>
        <input placeholder='Nome'/>
        <input placeholder='E-mail' />
        <input placeholder='Telefone' />
        <textarea placeholder='Deixe sua mensagem' />
      </div> 
      <Button>Enviar</Button>
    </div>

  )
}
