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
            <p>Revisa la consola para ver los datos cargados.</p>
        </div>
    );
}

export default Todos;
