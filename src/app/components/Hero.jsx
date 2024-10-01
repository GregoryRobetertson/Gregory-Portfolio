import React from 'react'

export default function Hero() {
  return (
    <div className='mt-5 text-white p-4 md:p-8'>
      <div className='w-full md:w-auto'>
        <h1 className='text-3xl md:text-4xl'>Hello, my name is Gregory Robertson.</h1>
        <p className='mt-2 md:mt-4 text-xl'>I am a Full Stack developer.</p>
        <p className='mt-2 md:mt-4 text-lg'>As a developer, I design, code, test, and maintain software applications or systems to meet specific requirements and improve functionality.</p>
        <div className='mt-4 md:mt-8'>
          <a className='btn btn-primary me-2' href="/Gregory_Robertson_Resume.pdf">Resume</a>
          <a className='btn btn-secondary' href="#contact">Contact Me</a>
        </div>
      </div>
    </div>
  )
}
