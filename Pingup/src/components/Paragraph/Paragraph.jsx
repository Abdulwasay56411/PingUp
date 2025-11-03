import React from 'react'

const Paragraph = (props) => {
  return (
    <div className='px-16'>
        <p className='text-[#45556C] text-base mt-2'>{props.para}</p>
    </div>
  )
}

export default Paragraph