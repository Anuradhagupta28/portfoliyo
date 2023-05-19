import { Container, ContainerSucces } from './styles'
import { useForm, ValidationError } from '@formspree/react'
import { toast, ToastContainer } from 'react-toastify'

import { useEffect, useState } from 'react'


export function Form() {
  

  

  
  
   
  

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form >
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            
          }}
          required
        />
        
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          onChange={(e) => {
            
          }}
        />
       
        
        <button
          type="submit"
      
        >

          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  )
}
