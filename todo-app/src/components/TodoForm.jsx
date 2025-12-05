import { useState } from 'react';

function TodoForm({ onAdd }) {
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            setError('El título es requerido');
            return;
        }
        setError('');
        console.log('Nuevo Todo:', title);
        onAdd(title);
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ marginBottom: '1rem', display: 'flex', gap: '0.5rem', flexDirection: 'column' }}>
            <div style={{ display: 'flex', gap: '0.5rem' }}>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Nueva tarea..."
                    style={{ padding: '0.5rem', flex: 1 }}
                />
                <button type="submit" style={{ padding: '0.5rem 1rem' }}>Agregar</button>
            </div>
            {error && <span style={{ color: 'red', fontSize: '0.8rem' }}>{error}</span>}
        </form>
    );
}

export default TodoForm;
