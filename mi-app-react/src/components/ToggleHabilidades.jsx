export default function ToggleHabilidades({ onToggle, mostrar }) {
    return (
        <section className="toggle-section">
            <button onClick={onToggle}>
                {mostrar ? "Ocultar Habilidades" : "Ver Habilidades"}
            </button>
        </section>
    );
}
