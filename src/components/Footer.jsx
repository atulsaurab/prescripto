import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/*.........left section............*/}
        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Prescripto is a digital platform designed to facilitate seamless communication between patients and doctors, simplifying the process of scheduling medical consultations.The system supports secure user authentication, real-time updates, and online payment integration for consultation fees. Doctors can manage their schedules, view patient details, and track appointments efficiently. </p>
        </div>
        {/*.........mid section............*/}
        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/*.........right section............*/}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>9876543210</li>
            <li>hellatul13@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        {/*.........copy right text............*/}
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2025@ prescripto - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer