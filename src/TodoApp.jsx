import React, { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { TodoAdd } from './components/TodoAdd';
import { TodoFilter } from './components/TodoFilter';
import { TodoListItem } from './components/TodoListItem';
// import { TodoAdd } from './components/TodoAdd'


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
const filterAllTodos = () => {
    return setTodos([...todos])
}

const filterActiveTodos = () => {
    const filter = todos.filter(todo => todo.completed === false)
    setActiveTodos([...filter])
    console.log(filter);
}

const filterCompletedTodos = () => {
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

            <TodoAdd
                handleInputChange={handleInputChange}
                handleSubmit={handleSubmit}
                description={description}
            />
            
            <div className='mt-5 '>
                {
                    (todos)  &&
                    todos.map( todo => (

                        <TodoListItem
                            key={todo.id}
                            {...todo}
                            checkTodo={checkTodo}
                            deleteTodo={deleteTodo}
                        />
                
                    ))
                    }

            </div>
            
                {todos != '' &&
                    <TodoFilter
                        todosLeft={todosLeft}
                        filterAllTodos={filterAllTodos}
                        filterActiveTodos={filterActiveTodos}
                        filterCompletedTodos={filterCompletedTodos}
                        clearCompleted={clearCompleted}
                    />
                    }

            </div>
        </>
    )
}
