import { useState, useEffect } from 'react';
import Title from '../../components/title/title.component';
import Footer from '../../components/Footer/Footer';
import TodoItem from '../../components/TO-DO-Item/To-Do-Item';
import { getUsernameFromToken } from '../../utils/jwtUtils';
import './Dashboard.scss';

const Dashboard = () => {

    const [todos, setTodos] = useState([]);

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

    const username = getUsernameFromToken();

    useEffect(() => {
        fetchTodos();
    },[]);

    return(
        <div id='dashboard-container'>
            <Title user={username} shrink={'login'}/>
            <div id='todo-container'>
                {todos.map((todo, index) => (
                    <TodoItem 
                        key={index} 
                        todo={todo} 
                        refreshTodos={fetchTodos}
                        onToggle={handleToggleLocal}
                    />
                ))}
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard;