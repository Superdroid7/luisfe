# CV en React - Proyecto Educativo

Este proyecto es una Hoja de Vida (CV) interactiva construida con React y Vite.

## Funcionalidades Implementadas

### Componentes y Props
- **CabeceraCV**: Información personal.
- **Perfil**: Resumen profesional.
- **Experiencia y Educación**: Listados de historial laboral y académico.
- **StackTecnologias**: Listado dinámico de tecnologías con estilos condicionales.

### Interactividad y Estado (Eventos y Hooks)
- **ToggleHabilidades**:
  - Uso de `useState` para controlar la visibilidad de la sección de habilidades blandas.
  - Renderizado condicional del componente `<Habilidades />`.
- **FormularioTecnologia**:
  - Formulario controlado con `useState` para capturar nombre y tipo de tecnología.
  - Comunicación entre componentes hijos y padre (`App`) para actualizar el estado global.
- **Gestión de Estado Global**:
  - La lista de tecnologías se gestiona en el componente principal `App` y se actualiza dinámicamente al agregar nuevos elementos.

## Cómo Ejecutar

1. Instalar dependencias:
   ```bash
   npm install
   ```
2. Correr el servidor de desarrollo:
   ```bash
   npm run dev
   ```
