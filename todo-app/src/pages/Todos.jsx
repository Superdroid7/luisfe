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

    const handleToggleComplete = (id) => {
        setTodos(todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    const handleDelete = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
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
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                            <span
                                onClick={() => handleToggleComplete(todo.id)}
                                style={{
                                    textDecoration: todo.completed ? 'line-through' : 'none',
                                    cursor: 'pointer',
                                    flex: 1
                                }}
                            >
                                {todo.title}
                            </span>
                            <span style={{ fontSize: '0.8rem', color: todo.completed ? 'green' : 'gray' }}>
                                {todo.completed ? 'Completado' : 'Pendiente'}
                            </span>
                        </div>
                        <button
                            onClick={() => handleDelete(todo.id)}
                            style={{ padding: '0.25rem 0.5rem', background: 'red', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '1rem' }}
                        >
                            Eliminar
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todos;
