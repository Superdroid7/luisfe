import { useState, useEffect } from 'react';

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

    return (
        <div>
            <h1>Lista de Tareas</h1>
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
