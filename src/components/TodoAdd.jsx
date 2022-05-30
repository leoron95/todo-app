import React, { useEffect, useRef } from "react";

export const TodoAdd = ({handleSubmit, handleInputChange, description, toggleDark, setCheck, check}) => {

    const inputReference = useRef(null);
    
    useEffect(() => {
        inputReference.current.focus();
    }, []);
    
    return (
        <>
            <form onSubmit={handleSubmit} className='relative flex flex-row border-none' > 
                <input
                    className={` rounded-[5px] h-12 text-xs sm:text-sm md:text-xl font-normal pl-[53px] sm:pl-[70px] md:h-16 w-[330px] sm:w-[500px] md:w-[600px] border-none ${toggleDark ? 'bg-[#25273c] text-[#cacde8]' : 'bg-white text-[#484b6a]'} ${check ? 'text-[#d2d3db] line-through' : ''} `}
                    type='text'
                    placeholder='Create a new todo...'
                    value={description}
                    onChange={handleInputChange}
                    ref={inputReference}
                /> 

                <div className='absolute ml-5  translate-y-3 md:translate-y-[18px]'>
                    <div onClick={()=>setCheck(!check) } className={`cursor-pointer  items-center justify-center sm:p-[1px] rounded-full sm:hover:bg-gradient-to-r from-[#57ddff] to-[#c058f3] rotate-45 border-[1px] ${toggleDark ? 'bg-[#25273c] border-[#484b6a]' : 'bg-white border-[#9394a5] '} ${check ? 'border-none' : ''} `}>
            
                    <div className={`h-5 w-5 sm:h-6 sm:w-6 rounded-full ${toggleDark ? 'bg-[#25273c]' : 'bg-white'} ${check ? 'bg-gradient-to-r from-[#57ddff] to-[#c058f3 ' : ''}`} >    
                </div>
        
                    </div>

                        <div className='absolute translate-x-[7px] -translate-y-[17px] '>
                            {
                            check &&
                                <img src="../../images/icon-check.svg" />
                            }
                        </div>

            </div>

        </form> 
        
        </>
    )
}
