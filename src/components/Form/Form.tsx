import { Container, ContainerSucces } from './styles'
import { useForm, ValidationError } from '@formspree/react'
import { toast, ToastContainer } from 'react-toastify'

import { useEffect, useState ,useRef} from 'react'

import emailjs from "@emailjs/browser"

export function Form() {
  
const[email,setEmail]=useState('')
const[desc,setDesc]=useState('')
  
const detailsFun=()=>{

  emailjs.sendForm('service_ps1v1wv', 'template_ajn3jfl', desc, 'rzC2BSo44wTGpqLhv')
            .then((result) => {
                console.log(result.text);
                window.alert("Mail Sent Successfully!!!")
            }, (error) => {
                console.log(error.text);
            });
}
  
  
   
  

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form  onSubmit={detailsFun}>
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          required
        />
        
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          onChange={(e) => {
            setDesc(e.target.value)
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
