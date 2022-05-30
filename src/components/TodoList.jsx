import React from 'react'
import { Draggable } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import { useDraggableInPortal } from '../hook/useDraggableInPortal';
import { TodoListItem } from './TodoListItem';


export const TodoList = ({
    todosFiltered,
    checkTodo,
    deleteTodo,
    toggleDark,
    setTodos,
    todos,
    todosLeft,
    clearCompleted,
}) => {

    const renderDraggable = useDraggableInPortal();

    // Function to update list on drop
const handleDrop = (droppedItem) => {
    // Ignore drop outside droppable container
    if (!droppedItem.destination) return;
    var updatedList = [...todos];
    // Remove dragged item
    const [reorderedItem] = updatedList.splice(droppedItem.source.index, 1);
    // Add dropped item
    updatedList.splice(droppedItem.destination.index, 0, reorderedItem);
    // Update State
    setTodos(updatedList);
  };

    return (
        <>
        <DragDropContext onDragEnd={handleDrop}>

        <Droppable droppableId="droppable">
          {(provided) => (
            <div
              className="mt-5"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              
              {todosFiltered.map((todo, index) => (

                    <Draggable key={todo.id} draggableId={todo.id.toString()} index={index}>
                    {renderDraggable((provided, snapshot) => (
                        <div ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        className={`flex flex-row  justify-start border-b-[1px] ${toggleDark ? 'bg-[#25273c] border-b-[#484b6a] ' : 'bg-white '}   h-14 md:h-16 w-[330px] first:rounded-tr-[5px] first:rounded-tl-[5px] sm:w-[500px] md:w-[600px]  items-center animate__animated animate__fadeIn animate__faster `}
                        >
                        <TodoListItem
                        key={todo.id}
                        {...todo}
                        checkTodo={checkTodo}
                        deleteTodo={deleteTodo}
                        toggleDark={toggleDark}
                        snapshot={snapshot}

                    />
                    </div>
                    ))}
                    
                    </Draggable>
                    ))}

{provided.placeholder}
            </div>
          )}
        </Droppable>

      </DragDropContext>
      
      {
          (todos != '') && 
          <div className={`flex flex-row justify-between items-center  rounded-bl-[5px] rounded-br-[5px]   h-16 w-[330px] sm:w-[500px] md:w-[600px] shadow-xl ${toggleDark ? 'bg-[#25273c]' : 'bg-white'} animate__animated animate__fadeIn animate__faster`}>

                <div className='flex ml-5 '>
                    <h1 className='text-xs sm:text-sm text-[#9394a5] '>{todosLeft.length} items left</h1>
                </div>

                <div className='flex mr-5'>
                    <h1 onClick={clearCompleted} className={`text-sm cursor-pointer text-[#9394a5] ${toggleDark ? 'hover:text-[#e4e5f1]' :'hover:text-[#484b6a]'}`}>Clear completed</h1>
                </div>
                        
        </div>
      }
      

      </>
    )
}
