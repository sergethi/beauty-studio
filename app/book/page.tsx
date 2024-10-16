import React from 'react'
import BookingForm from '../components/forms/booking-form';
import BusinessHours from "../components/business-hours";
import Map from "../components/map";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book",
};


const Book = () => {
  return (
    <div className="z-0 flex flex-col items-center max-w-full gap-8 mb-40">
    <div className="relative z-1 flex flex-col items-center w-full max-w-6xl h-[50vh] gap-8 p-10 text-center justify-center bg-[url('/images/salon-benyamin-bohlouli-unsplash.jpg')] bg-cover bg-center opacity-1">
      <div className="absolute z-1 inset-0 bg-black opacity-50"></div>
      <p className="z-10 text-5xl text-white font-bold">
        Expert Beauty Services for Radiant Results
      </p>
      <p className="z-10 text-3xl text-white">Learn more about what we offer</p>
      <div className="z-10 w-32 h-1 bg-danger"></div>
    </div>
    <p className="z-10 text-6xl font-bold text-left max-w-6xl w-full custm-pad md:p-0">
      Book a session
    </p>
    <BookingForm />

    <div className="w-full rounded-lg">
      <BusinessHours  className1="max-w-lg" className2="max-w-lg" className3='hidden' />
    </div>
    <Map />
  </div>
  )
}

export default Book
