import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className='flex gap-32 items-center text-center justify-center p-10'>
      <div className='flex gap-2 items-center'> <FaPhoneAlt /> 123-456-789</div>
      <div className='flex gap-2 items-center'> <FaEnvelope /> contact@example.com</div>
      <div className='flex gap-2 items-center'> <FaMapMarkerAlt  /> Fifth Avenue, New York</div>
    </div>
  )
}

export default ContactInfo
