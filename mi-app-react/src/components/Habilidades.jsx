export default function Habilidades({ habilidades }) {
    return (
        <div className="habilidades-container">
            <h3>Habilidades Blandas</h3>
            <ul>
                {habilidades.map((habilidad) => (
                    <li key={habilidad.id}>{habilidad.nombre}</li>
                ))}
            </ul>
        </div>
    );
}
