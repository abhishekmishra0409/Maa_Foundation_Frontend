import React from 'react'

const Hcomp = ({ heading, text }) => {
  return (
    <div className='flex flex-col gap-8 h-full px-5 justify-center items-center group bg-transparent hover:bg-black hover:bg-opacity-70 z-10 rounded-md transition-all duration-300 ease-in-out'>
      <h1 className='text-[2.5vw] font-bold opacity-0 group-hover:opacity-100 text-white transition-opacity duration-300 ease-in-out'>{heading}</h1>
      <p className='text-center text-[1.2vw] w-4/5 font-regular opacity-0 group-hover:opacity-100 text-white transition-opacity duration-300 ease-in-out'>{text}</p>
    </div>
  )
}

export default Hcomp;