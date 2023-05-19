import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg"
import { Form } from "../Form/Form";



export function Contact(){

  return(
    <Container id="contact">
      <header>
        <h2>Contact Me</h2>
        <p>I’m currently looking for any new opportunities, my inbox is always open.</p>
        <p> Whether you have a question or just want to say hi, I’ll try my best to get back to you! </p>
      </header>
      <div className="contacts">
        <div>
        <a href="annugupta8512@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:annugupta8512@gmail.com">annugupta8512@gmail.com</a>
        </div>
        <div>
        <a href="tel:+918512050688"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+918512050688">(+91) 8512050688</a>
        </div>  
      </div>
      <Form></Form>
    </Container>
  )
}