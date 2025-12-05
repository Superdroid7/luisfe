import { useState, useEffect } from 'react';
import TodoForm from '../components/TodoForm';

function Todos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        // Fetch initial todos from API
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(response => response.json())
            .then(data => {
                console.log('Todos fetched:', data);
                setTodos(data);
            })
            .catch(error => console.error('Error fetching todos:', error));
    }, []);

    const handleAddTodo = (title) => {
        const newTodo = {
            userId: 1,
            id: Date.now(),
            title,
            completed: false
        };
        setTodos([newTodo, ...todos]);
    };

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <TodoForm onAdd={handleAddTodo} />
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {todos.map(todo => (
                    <li key={todo.id} style={{
                        padding: '1rem',
                        borderBottom: '1px solid #ccc',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}>
                        <span style={{
                            textDecoration: todo.completed ? 'line-through' : 'none',
                            cursor: 'pointer'
                        }}>
                            {todo.title}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
