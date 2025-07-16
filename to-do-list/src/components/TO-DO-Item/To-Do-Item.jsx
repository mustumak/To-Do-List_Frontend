import './To-Do-Item.scss';

const TodoItem = ({todo, refreshTodos, onToggle, onEditClick}) => {    

    const {title,description,createdAt,dueDate,status} = todo;

    const handleToggle = async () => {
        try{            
            const url = `http://localhost:8080/todo/${todo.id}/toggle`;

            const response = await fetch(url, {
                method: 'PATCH',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
                }
            });

            if(!response.ok){
                throw new Error('Failed to change the status.')
            }
            
            onToggle(todo.id);
            
        }catch(error){
            console.error(error);
        }
    }

    const handleEdit = () => onEditClick(todo);

    const handleDelete = async () => {
        try{            
            const url = `http://localhost:8080/todo/${todo.id}`;

            const response = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`
                }
            });

            if(response.ok){
                alert('ToDo deleted successfully.');
                refreshTodos();
            }else{
                alert('Failed to delete Todo.')
            }       
            
        }catch(error){
            console.error(error);
        }
    }

    return(
        <div id='todo-card'>
            <h2 id='todo-title'>{title}</h2>
            <p id='todo-desc'>{description}</p>

            <div id='todo-dates'>
                <span id='created-date'>Created: {createdAt}</span>
                <span id='due-date'>Due: {dueDate}</span>
            </div>

            <div id='todo-footer'>
                <div className="status-toggle">
                    <label className="toggle-switch">
                        <input
                            type="checkbox"
                            checked={status === 'Completed'}
                            onChange={handleToggle}
                        />
                        <span className="slider"></span>
                    </label>
                    <span className="status-text">{status}</span>
                </div>

                <div className="actions">
                    <button onClick={handleEdit}>✏️</button>
                    <button onClick={handleDelete}>🗑️</button>
                </div>
            </div>
        </div>
    )
}

export default TodoItem;