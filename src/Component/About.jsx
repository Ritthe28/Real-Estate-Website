import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center container mx-auto md:mx-20 lg:px-32 w-full overflow-hidden ' id='About'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
      <p className='text-gray-50 max-w-80 text-center mb-10 text-black'>Passionate About Properties , Dedicated to your Vision </p>
      <div className='flex flex-col md:flex-row items-center md:items-start'>
        <img src={assets.brand_img} className='sm:w-1/2 w-full max-w-lg' alt="" />
        <div className='mx-10 flex flex-col items-center md:items-start mt-10 text-gray-600'>
          <div className=' grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>
            <div>
              <p className='text-4xl font-medium text-gray-800'>10+</p>
              <p>Years of Excellence</p>

            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>12+</p>
              <p>Projects Complited</p>

            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>20+</p>
              <p>Mn. Sq. Ft. Delivered </p>

            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>25+</p>
              <p>Ongoing Projects</p>

            </div>


          </div>
          <p className='my-10 max-w-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
             Nulla inventore excepturi assumenda
             cum aliquam numquam ex deleniti eaque deserunt ducimus fugiat sed, 
             sapiente doloremque illum iste at nam architecto earum.</p>
             <button className='bg-blue-600 text-white px-8 py-2 rounded'>Learn More</button>
        </div>
      </div>


    </div>
  )
}

export default About
