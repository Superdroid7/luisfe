import { useState } from 'react';

export default function FormularioTecnologia({ agregarTecnologia }) {
    const [nombre, setNombre] = useState("");
    const [tipo, setTipo] = useState("frontend");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!nombre.trim()) return;

        const nuevaTecnologia = {
            nombre,
            tipo,
            id: Date.now() // Simple ID generation
        };

        agregarTecnologia(nuevaTecnologia);
        setNombre("");
        setTipo("frontend");
    };

    return (
        <section className="formulario-section">
            <h3>Agregar Nueva Tecnología</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="nombre">Nombre:</label>
                    <input
                        type="text"
                        id="nombre"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                        placeholder="Ej: Vue.js"
                    />
                </div>
                <div>
                    <label htmlFor="tipo">Tipo:</label>
                    <select
                        id="tipo"
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                    >
                        <option value="frontend">Frontend</option>
                        <option value="backend">Backend</option>
                        <option value="base de datos">Base de Datos</option>
                    </select>
                </div>
                <button type="submit">Agregar</button>
            </form>
        </section>
    );
}
