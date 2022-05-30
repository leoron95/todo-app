export const handleFilter = (tag, todos) =>{
    
    if(tag === 'All' ) {
        return todos
    } else if (tag === 'Active') {
        return todos.filter(todo => todo.completed === false)
    } else if ( tag === 'Completed') {
        return todos.filter(todo => todo.completed === true)
    }
    return todos
    
}