function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <li style={{
            padding: '1rem',
            borderBottom: '1px solid #ccc',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
                <span
                    onClick={() => onToggle(todo.id)}
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
                onClick={() => onDelete(todo.id)}
                style={{ padding: '0.25rem 0.5rem', background: 'red', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginLeft: '1rem' }}
            >
                Eliminar
            </button>
        </li>
    );
}

export default TodoItem;
