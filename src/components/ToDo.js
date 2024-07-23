import React from 'react'

const ToDo = (props) => {

  return (
    // <div className='mx-auto w-full '>
      <div className='flex justify-between text-teal-300 font-bold bg-gray-700 rounded-md py-4 px-10 my-5'>
        <h1>
          {props.text}
        </h1>
        <button
          className='bg-teal-300 px-2 rounded text-gray-700 hover:bg-teal-500'
          onClick={()=>props.deleteHandler(props.text)}>
          X
        </button>
      </div>
    // </div>
  )
}

export default ToDo