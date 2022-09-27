import React from 'react'
import style from './Form.module.css'
import FormGroup from './FormGroup.js'

export default function Form(props) {
  
  return (
    <div className={style.formContainer}>
      <div className={style.titleContainer}> 
        <h1>tire suas duvidas</h1>
        <h2>Preencha o formulário abaixo e em breve entrarei em contato.</h2>
      </div>
      <FormGroup />
    </div>

  )
}
