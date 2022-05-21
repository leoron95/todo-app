import React from 'react'

export const TodoListItem = ({
    id,
    desc,
    completed,
    checkTodo,
    deleteTodo
}) => {
    return (
        <div key={id} className='flex flex-row  justify-start border-[1px] border-solid  bg-white first:rounded-tr-[5px] first:rounded-tl-[5px]  h-16 w-[500px] items-center'>

            <div
                onClick={()=> checkTodo(id, completed)}
                className={`h-7 w-7 border-[1px] cursor-pointer  rounded-xl items-center mr-5 ml-5 ${completed ? 'bg-gradient-to-r from-[#57ddff] to-[#c058f3] text-' : ''} `}
            >
                <div className='mt-2 ml-2'>
                <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#FFF" strokeWidth="2" d="M1 4.304L3.696 7l6-6"/></svg>
                </div>
                

            </div>    
        

        <div className='flex justify-start '>
            <section className={`text-xl ${completed ? 'line-through' : ''} `}>
            {desc}

            </section>
        </div>

        <div className='flex ml-auto mr-5'>
            <button onClick={()=>deleteTodo(id)} className='flex '>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                    <path fill="#494C6B" fillRule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/>
                </svg>
            </button>
        </div>
        </div>

) 
}

