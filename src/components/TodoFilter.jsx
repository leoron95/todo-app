import React from 'react'

export const TodoFilter = ({
    todosLeft,
    filterAllTodos,
    filterActiveTodos,
    filterCompletedTodos,
    clearCompleted
}) => {
    return (
        <div className='flex flex-row justify-start items-center border-[1px] border-solid rounded-bl-[5px] rounded-br-[5px] bg-white  h-16 w-[500px] '>
                        <div className='ml-5 mr-14'>
                            <h1 className='text-sm'>{todosLeft.length} items left</h1>
                        </div>

                        <div className='text-base '>
                            <span onClick={filterAllTodos} className='cursor-pointer'>All</span>
                            <span onClick={filterActiveTodos} className='mx-5 cursor-pointer'>Active</span>
                            <span onClick={filterCompletedTodos} className='cursor-pointer'>Completed</span>
                        </div>

                        <div className='ml-auto mr-5'>
                            <h1 onClick={clearCompleted} className='text-sm cursor-pointer '>Clear completed</h1>
                        </div>
                        
                    </div>
    )
}
