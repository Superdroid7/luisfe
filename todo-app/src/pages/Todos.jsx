import { useState, useEffect } from 'react';
import TodoForm from '../components/TodoForm';
import TodoItem from '../components/TodoItem';

function Todos() {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        // Fetch initial todos from API
        fetch('https://jsonplaceholder.typicode.com/todos?_limit=10')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar datos');
                }
                return response.json();
            })
            .then(data => {
                console.log('Todos fetched:', data);
                setTodos(data);
            })
            .catch(err => {
                console.error('Error fetching todos:', err);
                setError(err.message);
            })
            .finally(() => setLoading(false));
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

    if (loading) return <div>Cargando tareas...</div>;
    if (error) return <div style={{ color: 'red' }}>Error: {error}</div>;

    return (
        <div>
            <h1>Lista de Tareas</h1>
            <TodoForm onAdd={handleAddTodo} />
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={handleToggleComplete}
                        onDelete={handleDelete}
                    />
                ))}
            </ul>
        </div>
    );
}

export default Todos;
