import React from 'react'
import { SubHeader } from '../SubComponents'
import { ContactUs } from '../Components/MainComponents'


const ContactUsPage = () => {
  return (
   <>
   <SubHeader title="Contact Us" first="Home" linkFirst="/" second="contact" />
   <ContactUs />
   </>
  )
}

export default ContactUsPage