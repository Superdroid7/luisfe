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
  const [mostrarHabilidades, setMostrarHabilidades] = useState(true);
  const [tecnologias, setTecnologias] = useState(tecnologiasIniciales);

  const agregarTecnologia = (nuevaTecnologia) => {
    setTecnologias([...tecnologias, nuevaTecnologia]);
  };

  return (
    <div className="app-container">
      <CabeceraCV datos={datosPersonales} />
      <Perfil perfil={perfilProfesional} />
      <Experiencia experiencias={experiencias} />
      <Educacion educacion={educacion} />
      <ToggleHabilidades mostrar={mostrarHabilidades} onToggle={() => setMostrarHabilidades(!mostrarHabilidades)} />
      {mostrarHabilidades && <Habilidades habilidades={habilidades} />}
      <StackTecnologias tecnologias={tecnologias} />
      <FormularioTecnologia agregarTecnologia={agregarTecnologia} />
    </div>
  );
}
