import React, { useEffect, useRef } from 'react'

export const TodoFilter = ({
    filter,
    setFilter,
    toggleDark
}) => {

    const inputReference = useRef(null);
    
    useEffect(() => {
        inputReference.current.click();
    }, []);

    return (
        <div className={`animate__animated animate__fadeIn animate__faster flex  flex-row justify-center bg-[#25273c] text-sm text-[#9394a5] font-bold w-[330px] mt-5 h-12 items-center sm:bg-transparent sm:-translate-y-[78px] rounded-[5px] shadow-xl sm:shadow-none sm:mr-10 ${toggleDark ? 'bg-[#25273c]' : 'bg-white'}  `}>
                            
            <span onClick={()=>setFilter('All')} ref={inputReference} className={`cursor-pointer  ${toggleDark ? 'hover:text-[#e4e5f1]' :'hover:text-[#484b6a]'}  ${filter === 'All' ? 'text-[#3a7bfd] hover:text-[#3a7bfd] ' : ''}`}>
                All
            </span>
            
            <span onClick={()=>setFilter('Active')} className={`mx-5 cursor-pointer ${toggleDark ? 'hover:text-[#e4e5f1]' :'hover:text-[#484b6a]'} ${filter === 'Active' ? 'text-[#3a7bfd] hover:text-[#3a7bfd]' : ''}`}>
                Active
            </span>
            
            <span onClick={()=>setFilter('Completed')} className={`cursor-pointer ${toggleDark ? 'hover:text-[#e4e5f1]' :'hover:text-[#484b6a]'} ${filter === 'Completed' ? 'text-[#3a7bfd] hover:text-[#3a7bfd]' : ''}`}>
                Completed
            </span>

        </div>
    )
}
