import React from 'react'

const Heading = (props) => {
  return (
    <div className='px-16 pt-7'>
    <h2 className="text-[#0F172B] text-3xl font-bold">
      {" "}
     {props.heading}
    </h2>
    <p className='text-[#45556C] text-base mt-2'>{props.message}</p>
  </div>
  )
}

export default Heading