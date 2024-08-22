import React from 'react'
import BookingForm from '../components/forms/booking-form';
import BusinessHours from "../components/business-hours";
import Map from "../components/map";

const Book = () => {
  return (
    <div className="z-0 flex flex-col items-center max-w-full gap-8 mb-40">
    <div className="z-1 flex flex-col items-center w-full max-w-6xl h-[50vh] gap-12 p-10 text-center justify-center bg-[url('https://images.unsplash.com/photo-1633681926053-9074b76e21a7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center opacity-1">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <p className="z-10 text-5xl font-bold">
        Expert Beauty Services for Radiant Results
      </p>
      <p className="z-10 text-3xl">Learn more about what we offer</p>
      <div className="z-10 w-32 h-1 bg-danger"></div>
    </div>
    <p className="z-10 text-6xl font-bold text-left max-w-6xl w-full">
      Book a session
    </p>
    <BookingForm />

    <div className="w-full rounded-lg">
      <BusinessHours className1="max-w-lg" className2="max-w-lg" />
    </div>
    <Map />
  </div>
  )
}

export default Book