import React from 'react'


export const TodoListItem = ({
    id,
    desc,
    completed,
    checkTodo,
    deleteTodo,
    toggleDark,
    snapshot
}) => {

    return (
        <div key={id} className={`flex flex-row  justify-start border-b-[1px] ${toggleDark ? 'bg-[#25273c] border-b-[#484b6a] ' : ''}   h-14 md:h-16 w-[330px] first:rounded-tr-[5px] first:rounded-tl-[5px] sm:w-[500px] md:w-[600px]  items-center ${snapshot.isDragging && toggleDark ? 'bg-gray-600' : ''} ${snapshot.isDragging && toggleDark == false ? 'bg-gray-400' : ''} `}>

            <div>
                <div onClick={()=> checkTodo(id, completed)} className={` ml-5 flex cursor-pointer  items-center justify-center sm:p-[1px]  rounded-full sm:hover:bg-gradient-to-r from-[#57ddff] to-[#c058f3] rotate-45  border-[1px] ${toggleDark ? 'bg-[#25273c] border-[#484b6a] ' : 'bg-white border-[#9394a5] '} ${completed ? 'border-none' : ''}  `}>

                    <div className={`flex  h-5 w-5 sm:h-6 sm:w-6 rounded-full ${toggleDark ? 'bg-[#25273c]' : 'bg-white'} ${completed ? 'bg-gradient-to-r from-[#57ddff] to-[#c058f3 ' : ''}`} >    
                        </div>
                            <div className='absolute -rotate-45 '>
                                {completed &&
                                    <img src="../../images/icon-check.svg" />
                                }
                            </div>
                </div>
            </div>

                <div className='flex justify-start mt-1 ml-3 sm:ml-[22px] md:ml-6'>
                    <section className={`text-xs sm:text-sm md:text-xl font-normal cursor-pointer  ${toggleDark ? 'text-[#cacde8] ' : 'text-[#484b6a]'}  ${completed ? 'text-[#d2d3db] line-through' : ''} ${toggleDark && completed ? 'text-[#777a92]' : ''} `}>
                        {desc}

                    </section>
                </div>

                <div className='flex w-3 ml-auto mr-5 sm:w-4 '>
                    <button onClick={()=>deleteTodo(id)} className='flex '>
                        <img src="../../images/icon-cross.svg" alt="" />
                    </button>
                </div>
        </div>
    ) 
}

