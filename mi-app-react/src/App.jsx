import { useState } from 'react';
import CabeceraCV from "./components/CabeceraCV.jsx";
import Perfil from "./components/Perfil.jsx";
import Educacion from "./components/Educacion.jsx";
import Experiencia from "./components/Experiencia.jsx";
import StackTecnologias from "./components/StackTecnologias.jsx";
import ToggleHabilidades from "./components/ToggleHabilidades.jsx";
import Habilidades from "./components/Habilidades.jsx";
import FormularioTecnologia from "./components/FormularioTecnologia.jsx";
import { datosPersonales, perfilProfesional, experiencias, educacion, habilidades, tecnologiasIniciales } from "./cvData.js";

export default function App() {
  const [tecnologias, setTecnologias] = useState(tecnologiasIniciales);
  const [mostrarHabilidades, setMostrarHabilidades] = useState(false);

  const agregarTecnologia = (nuevaTecnologia) => {
    setTecnologias([...tecnologias, nuevaTecnologia]);
  };

  const toggleHabilidades = () => {
    setMostrarHabilidades(!mostrarHabilidades);
  };

  return (
    <div>
      {/* Sección de CV */}
      <CabeceraCV {...datosPersonales} />
      <Perfil resumen={perfilProfesional} />
      <Experiencia experiencias={experiencias} />
      <Educacion educacion={educacion} />

      <ToggleHabilidades onToggle={toggleHabilidades} mostrar={mostrarHabilidades} />
      {mostrarHabilidades && <Habilidades habilidades={habilidades} />}

      <StackTecnologias />
      <FormularioTecnologia agregarTecnologia={agregarTecnologia} />
    </div>
  );
}
