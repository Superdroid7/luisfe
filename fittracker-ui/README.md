# FitTracker UI

Esta es la versión estática en HTML/CSS de la aplicación FitTracker, extraída del proyecto React original para servir como un prototipo de interfaz de usuario independiente y ligero.

## Descripción General

FitTracker UI permite a los usuarios ver e interactuar con un panel de seguimiento de entrenamientos, calendario y reportes. Utiliza HTML y CSS puro, sin dependencias de frameworks de JavaScript.

## Estructura del Proyecto

```
fittracker-ui/
├── index.html          # Página principal del Dashboard
├── templates/          # Otras páginas
│   ├── workouts.html   # Biblioteca de entrenamientos y filtros
│   ├── schedule.html   # Calendario y sesiones próximas
│   └── reports.html    # Gráficos de progreso y estadísticas
├── styles/             # Arquitectura CSS modular
│   ├── style.css       # Punto de entrada principal (importa todos los módulos)
│   ├── variables.css   # Colores globales y variables
│   ├── base.css        # Reinicio (Reset) y tipografía
│   ├── layout.css      # Encabezado (Header) y sistemas de cuadrícula (Grid)
│   ├── components.css  # Botones, tarjetas, inputs
│   ├── dashboard.css   # Estilos específicos del Dashboard
│   ├── charts.css      # Visualizaciones de gráficos
│   ├── calendar.css    # Componentes del calendario
│   └── responsive.css  # Adaptaciones para móviles
└── assets/             # Imágenes, iconos y fuentes
```

## Características Implementadas

*   **Migración Estática**: Todos los componentes originales de React (`Dashboard`, `Workouts`, `Schedule`, `Reports`) fueron convertidos manualmente a plantillas HTML semánticas.
*   **Modularización de CSS**: El archivo monolítico original `FitTracker.css` fue refactorizado en módulos enfocados (variables, diseño, componentes, etc.) para una mejor mantenibilidad y legibilidad.
*   **Diseño Visual**:
    *   **Dashboard Moderno**: Incluye "Próximos Entrenamientos" con diseños basados en iconos.
    *   **Gráficos Realistas**: Gráficos de barras solo con CSS y gráficos de líneas basados en SVG en la sección de Reportes.
    *   **Diseño Responsivo**: Sistema de cuadrícula totalmente responsivo que se adapta a pantallas de móviles y escritorio.

## Cómo Ejecutar

Simplemente abre el archivo `index.html` en cualquier navegador web moderno. No se requiere ningún paso de construcción (build) ni servidor.
