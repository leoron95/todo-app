import React, { useEffect, useState } from 'react'
import { Header } from './components/Header'
// import { TodoAdd } from './components/TodoAdd'

const init = () => {

    return JSON.parse(localStorage.getItem('todos')) || [];
}

export const TodoApp = () => {

const [description, setDescription] = useState('')
const [todos, setTodos] = useState([])
const [activeTodos, setActiveTodos] = useState([])




useEffect(() => {
    const items = JSON.parse(localStorage.getItem('todos'));
    if (items) {
        setTodos(items);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify( todos ))
}, [todos]);

const handleInputChange = (e) => {
    setDescription(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()

    const newTodo = {
        id: new Date().getTime(),
        desc: description,
        completed: false
    }

    if(description.trim().length != ''){
        setTodos([...todos, newTodo])
        setDescription('')
    }
    
}

const deleteTodo = (id) =>{
    // console.log(id);
    const deletedTodo = todos.filter((item) => item.id !== id);
    setTodos([...deletedTodo])
}

const checkTodo = (id, completed) => {

    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.completed = !completed;

    setTodos([...temp]);
    // console.log(temp);
}

const todosLeft = todos.filter(todo => todo.completed === false) 
const allTodos = () => {
    return setTodos([...todos])
}
console.log(todos);
const filterActiveTodos = () => {
    const filter = todos.filter(todo => todo.completed === false)
    setActiveTodos([...filter])
}

const completedTodos = () => {
    const completed = todos.filter(todo => todo.completed === true)
    console.log(completed);
}

const clearCompleted = () => {
    const clear = todos.filter(todo => todo.completed !== true)
    setTodos([...clear])
    console.log(clear);
}

    return (
        <>
            <Header/>



            
            <div className='container flex flex-col items-center justify-center mx-auto -translate-y-40'>

            
            <form onSubmit={handleSubmit} className=''>
            <input
                className='border-2 border-solid  rounded-[5px]  h-16 w-[500px] '
                type='text'
                placeholder='Create a new todo...'
                value={description}
                onChange={handleInputChange}
            />
            </form>
            
           
            

            <div className='mt-5 '>
                {
                    (todos)  &&
                    todos.map( todo => (

                        <div key={todo.id} className='flex flex-row  justify-start border-[1px] border-solid  bg-white first:rounded-tr-[5px] first:rounded-tl-[5px]  h-16 w-[500px] items-center'>

                            {/* <div className='flex mt-5 ml-5'> */}

                                <div
                                    onClick={()=> checkTodo(todo.id, todo.completed)}
                                    className={`h-7 w-7 border-[1px] cursor-pointer  rounded-xl items-center mr-5 ml-5 ${todo.completed ? 'bg-gradient-to-r from-[#57ddff] to-[#c058f3] text-' : ''} `}
                                >
                                    <div className='mt-2 ml-2'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>
                                    </div>
                                    

                                </div>    
                            
                            {/* </div> */}

                            <div className='flex justify-start '>
                                <section className={`text-xl ${todo.completed ? 'line-through' : ''} `}>
                                {todo.desc}

                                </section>
                            </div>



                            
                            <div className='flex ml-auto mr-5'>
                                <button onClick={()=>deleteTodo(todo.id)} className='flex '>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                                        <path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/>
                                    </svg>
                                </button>
                            </div>
                            </div>

                    ) ) 
                }
                

                

            </div>
            
                {todos != '' &&
                    <div className='flex flex-row justify-start items-center border-[1px] border-solid rounded-bl-[5px] rounded-br-[5px] bg-white  h-16 w-[500px] '>
                        <div className='ml-5 mr-14'>
                            <h1 className='text-sm'>{todosLeft.length} items left</h1>
                        </div>

                        <div className='text-base '>
                            <span onClick={allTodos} className='cursor-pointer'>All</span>
                            <span onClick={filterActiveTodos} className='mx-5 cursor-pointer'>Active</span>
                            <span onClick={completedTodos} className='cursor-pointer'>Completed</span>
                        </div>

                        <div className='ml-auto mr-5'>
                            <h1 onClick={clearCompleted} className='text-sm cursor-pointer '>Clear completed</h1>
                        </div>
                        
                    </div>
                    }


            
            </div>
        </>
    )
}
