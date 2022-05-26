import React, { useEffect, useState } from 'react'
import './effects.css'





export const SimpleForm = () => {


  const [stateForm, setstateForm] = useState({
    name: '',
    email: ''

  })

  const { name, email } = stateForm

  useEffect(() => {

    console.log('Hola')

  }, [])


  const handleInputChange = ({ target }) => {

    setstateForm({
      ...stateForm,
      [target.name]: target.value,

    })



  }

  return (
    <>
      <h1>useEffect</h1>
      <hr />

      <div className='mb-3' >
        <input
          type='text'
          name='name'
          className='form-control'
          placeholder='Tu nombre'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}
        />
      </div>
      <div className='mb-3' >
        <input
          type='text'
          name='email'
          className='form-control'
          placeholder='Tu email'
          autoComplete='off'
          value={email}
          onChange={handleInputChange}
        />
      </div>


    </>
  )
}
