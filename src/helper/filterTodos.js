export const handleFilter = (filter, todos) =>{
    
    if(filter === 'All' ) {
        return todos
    } else if (filter === 'Active') {
        return todos.filter(todo => todo.completed === false)
    } else if ( filter === 'Completed') {
        return todos.filter(todo => todo.completed === true)
    }
    return todos
    
}