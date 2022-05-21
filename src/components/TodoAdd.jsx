import React from 'react'

export const TodoAdd = ({handleSubmit, handleInputChange, description }) => {

    return (
        <form onSubmit={handleSubmit} className=''>
            <input
                className='border-2 border-solid  rounded-[5px]  h-16 w-[500px] '
                type='text'
                placeholder='Create a new todo...'
                value={description}
                onChange={handleInputChange}
            />
            </form>
    )
}
