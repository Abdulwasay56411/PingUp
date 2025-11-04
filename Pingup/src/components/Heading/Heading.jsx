import React from 'react'

const Heading = (props) => {
  return (
    <div className=' px-5 md:px-16 pt-7'>
    <h2 className="text-[#0F172B] text-3xl font-bold">
      {" "}
     {props.heading}
    </h2>
  </div>
  )
}

export default Heading