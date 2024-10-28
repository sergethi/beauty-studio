import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className='sm:flex flex flex-col sm:gap-20 sm:p8 gap-2 w-full items-center justify-center p-2'>
      <div className='flex gap-2 items-center'> <FaPhoneAlt /> 123-456-789</div>
      <div className='flex gap-2 items-center'> <FaEnvelope /> contact@example.com</div>
      <div className='flex gap-2 items-center'> <FaMapMarkerAlt  /> Fifth Avenue, New York</div>
    </div>
  )
}

export default ContactInfo
