import React from 'react'
import './App.css'
import NewItem from './components/NewItem'
import ToDo from './components/ToDo'

const App = () => {
  const [toDos, setToDos] = React.useState([
    { id: 'Wake Up', title: 'Wake Up' }, {id:"Sleep", title: "Sleep" }])
  
  const [formData, setFormData] = React.useState({ title: '' })


  
  
  const changeHandler = (event) => {
    setFormData((prevData) => ({...prevData, title: event.target.value }))    
  }
  
  const submitHandler = (event) => {
    event.preventDefault()
    console.log(formData.title)
    setToDos((prevToDoData)=>[...prevToDoData,{id:formData.title,title:formData.title}])
    setFormData({title:''})
    
      
  }
  const deleteHandler = (id) => {

    setToDos((prevToDos) => {
      return (
        prevToDos.filter((todo)=> todo.id !== id)
        )
      })
    }
  const todos = toDos.map((toDo) => {
    return <ToDo key={toDo.title} text={toDo.title} deleteHandler={ deleteHandler} />
  })

  return (
    <div className='lg:w-1/2  w-4/5 flex-col mx-auto place-items-center'>
      <h1 className='block bg-teal-400 text-5xl font-bold mt-5 text-center'>ToDo List</h1>
      <NewItem changeHandler={changeHandler} submitHandler={submitHandler} formData={formData} />
      <h1 className='text-xl font-bold'>Items to be done</h1>
      {todos}
    </div>
  )
}

export default App