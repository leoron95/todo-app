import React, { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { ThemeSwitch } from './components/ThemeSwitch';
import { TodoAdd } from './components/TodoAdd';
import { TodoFilter } from './components/TodoFilter';
import { TodoList } from './components/TodoList';
import { handleFilter } from './helper/filterTodos';


export const TodoApp = () => {

const [description, setDescription] = useState('')
const [todos, setTodos] = useState([])
const [tag, setTag] = useState('')
const [toggleDark, setToggleDark] = useState(false)
const [check, setCheck] = useState(false)


useEffect(() => {
    const darkMode = JSON.parse(localStorage.getItem('dark'));
    if (darkMode) {
        console.log(darkMode);
        setToggleDark(darkMode);
    }
}, []);

useEffect(() => {
    const items = JSON.parse(localStorage.getItem('todos'));
    if (items) {
        setTodos(items);
    }
}, []);

useEffect(() => {
    localStorage.setItem('todos',JSON.stringify( todos ))
}, [todos]);

useEffect(() => {
    localStorage.setItem('dark',JSON.stringify( toggleDark ))
}, [toggleDark]);


useEffect(() => {
    const theme = () => {
        if(toggleDark){
            document.documentElement.classList.remove('bg-[#fafafa]')
            document.documentElement.classList.add('bg-[#181824]')
        } else{
            document.documentElement.classList.remove('bg-[#181824]')
            document.documentElement.classList.add('bg-[#fafafa]')
        }
    }

    theme()
}, [toggleDark]);


const handleInputChange = (e) => {
    setDescription(e.target.value)
}

const handleSubmit = (e) => {
    e.preventDefault()

    const newTodo = {
        id: new Date().getTime(),
        desc: description,
        completed: check
    }

    if(description.trim().length != ''){
        setTodos([newTodo, ...todos])
        setDescription('')
    }
    
}

const deleteTodo = (id) =>{
    const deletedTodo = todos.filter((item) => item.id !== id);
    setTodos([...deletedTodo])
}

const checkTodo = (id, completed) => {

    const temp = [...todos];
    const item = temp.find((item) => item.id === id);
    item.completed = !completed;
    setTodos([...temp]);
}

const clearCompleted = () => {
    const clear = todos.filter(todo => todo.completed !== true)
    setTodos([...clear])
    return clear
}

const todosLeft = todos.filter(todo => todo.completed === false)

const todosFiltered = handleFilter(tag, todos)


    return (
        <>
            <Header toggleDark={toggleDark}/>

            <div className='container flex flex-col items-center justify-center mx-auto -translate-y-60 md:-translate-y-40 animate__animated animate__fadeIn animate__slow'>

            <div className='flex w-[330px] sm:w-[500px] md:w-[600px]  justify-between flex-row mx-auto -translate-y-7 md:-translate-y-10 items-baseline'>
                <div className='flex '>
                    <h1 className='text-3xl md:text-5xl font-bold tracking-[.25em] text-[#fafafa]'>TODO</h1>
                </div>

                <div className='flex '>
                        <ThemeSwitch toggleDark={toggleDark} setToggleDark={setToggleDark}  />
                </div>
            </div>

            <TodoAdd
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                description={description}
                setCheck={setCheck}
                check={check}
                todos={todos}
                toggleDark={toggleDark}
            />

            <TodoList
                todosFiltered={todosFiltered}
                checkTodo={checkTodo}
                deleteTodo={deleteTodo}
                toggleDark={toggleDark}
                setTodos={setTodos}
                todos={todos}
                todosLeft={todosLeft}
                clearCompleted={clearCompleted}
            />

                    {
                        (todos != '') &&
                        <>
                        <TodoFilter
                            setTag={setTag}
                            tag={tag}
                            toggleDark={toggleDark}
                        />

                            <div className='mt-11 sm:mt-0 '>
                                <p className={`text-[#9394a5]`}>Drag and drop to reorder list</p>
                            </div>
                        </>
                    }
                    
            </div>

        </>
                )
}
