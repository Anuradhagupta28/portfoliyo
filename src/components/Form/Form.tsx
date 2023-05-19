import { Container, ContainerSucces } from './styles'
import { useForm, ValidationError } from '@formspree/react'
import { toast, ToastContainer } from 'react-toastify'

import { useEffect, useState ,useRef} from 'react'

import emailjs from "@emailjs/browser"

export function Form() {
  
const[email,setEmail]=useState('')
const[desc,setDesc]=useState('')

const serviceId='service_ps1v1wv'
const templateId='template_nlnmh2p'
const key='rzC2BSo44wTGpqLhv'

interface FormData {
  email: string;
  desc: string;
}

const sendEmail= (formData: FormData)=>{
  const { email, desc } = formData;
  const emailData: Record<string, unknown> = {
    email,
    desc,
  };
  return emailjs.send(serviceId,templateId,emailData)
}



  
const detailsFun=(e:React.FormEvent<HTMLFormElement>)=>{
e.preventDefault()
 const formData={
  email,
  desc
 }

sendEmail(formData)
      .then(() => {
        toast.success('Email sent successfully');
        setEmail('');
        setDesc('');
      })
      .catch((error) => {
        toast.error('Failed to send email');
        console.error(error);
      });
}
emailjs.init(key)

  
  
   
  

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
