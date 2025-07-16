import { useState, useEffect } from 'react';
import Title from '../../components/title/title.component';
import Footer from '../../components/Footer/Footer';
import TodoItem from '../../components/TO-DO-Item/To-Do-Item';
import { getUsernameFromToken } from '../../utils/jwtUtils';
import './Dashboard.scss';
import Button from '../../components/Button/Button';
import Modal from '../../components/To-Do-Modal/To-Do-Modal';

const Dashboard = () => {

    const [todos, setTodos] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [mode, setMode] = useState('');
    const [todoBeingEdited, setTodoBeingEdited] = useState(null);

    const fetchTodos = async () => {
        
        try{
            const response = await fetch('http://localhost:8080/todo', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
                    'Content-Type': 'application/Json'
                }
            });

            if(!response.ok)
                throw new Error('Failed to fetch Todos');

            const data = await response.json();
            setTodos(data);          
            
        }catch(error){
            console.error(error);
        }
    }

    const handleToggleLocal = (id) => {
        setTodos(prev =>
            prev.map(todo =>
                todo.id === id 
                    ? {...todo, status: todo.status === 'Completed' ? 'Pending' : 'Completed'}
                    : todo
            )
        );
    };

    const addNewTodo = () => {
        setTodoBeingEdited(null);
        setMode('Add');
        setIsModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsModalOpen(false);
    }

    const handleAddTodo = async(todo) => {
        try{
            const response = await fetch('http://localhost:8080/todo', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(todo)
            });

            if(!response.ok)
                throw new Error('Failed to add Todo');

            await fetchTodos();

        }catch(error){
            console.error(error);
        }
    }

    const editTodo = (todo) => {
        setTodoBeingEdited(todo);
        setMode('Edit');
        setIsModalOpen(true);
    }

    const handleEditTodo = async (updatedTodo) => {
        try{
            const url = `http://localhost:8080/todo/${todoBeingEdited.id}`;
            const response = await fetch(url,{
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('jwtToken')}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(updatedTodo)
            });

            if(!response.ok)
                throw new Error('Failed to update the Todo');

            await fetchTodos();

        }catch(error){
            console.error(error);
        }
    }

    const username = getUsernameFromToken();

    useEffect(() => {
        fetchTodos();
    },[]);

    return(
        <div id='dashboard-container'>
            <Title user={username} shrink={'login'}/>
            <div id='todo-container'>
                <Button id='addTodoBtn' onClick={addNewTodo}>+</Button>
                {todos.map((todo, index) => (
                    <TodoItem 
                        key={index} 
                        todo={todo} 
                        refreshTodos={fetchTodos}
                        onToggle={handleToggleLocal}
                        onEditClick={editTodo}
                    />
                ))}
            </div>
            <Modal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                onSubmit={mode === 'Edit' ? handleEditTodo : handleAddTodo}
                initialData={todoBeingEdited}
                mode={mode}
            />
            <Footer />
        </div>
    )
}

export default Dashboard;