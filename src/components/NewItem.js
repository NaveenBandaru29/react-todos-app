import React from 'react'

const NewItem = (props) => {

  return (
    <form className='w-full flex-col mx-auto  bg-gray-500 rounded-lg my-5 p-4' onSubmit={props.submitHandler}>
      <label className='text-white text-small font-bold block mb-5'>Add a New Item</label>
      <input className='w-full border text-gray-600 font-semibold rounded mb-5 px-4 py-3 block focus:outline-teal-400'
        onChange={props.changeHandler}
        value={props.formData.title}
        type='text'
        name="title"
        placeholder='New Item' />
      <div className='text-center md:text-right '>
        <button className='w-full md:w-auto bg-teal-300 px-4 py-2 my-2 md:m-2 font-bold rounded hover:bg-teal-500' tpye='submit'>Add Item</button>
        <button className='w-full md:w-auto bg-teal-300 px-4 py-2 my-2 md:m-2 font-bold rounded hover:bg-teal-500' type='reset'>Clear Item</button>
      </div>
    </form>
  )
}

export default NewItem