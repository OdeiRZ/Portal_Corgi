# Portal Corgi and the Autumn Winds

Landing page promocional en HTML, CSS y JavaScript para el videojuego "Corgi and the Autumn Winds".

## Características

- Sección "Historia" con el resumen de la narrativa del juego.
- Sección "Personajes" con el listado de los protagonistas de la trama.
- Sección "Multimedia" con slideshow arrastrable (drag) de arte conceptual y hueco para el tráiler de lanzamiento.
- Sección "Descarga" con enlaces al manual (PDF) y al ejecutable del juego (ZIP), incluidos en `public/rsc/`.
- Botones con efecto de distorsión/glitch (filtros SVG animados con TweenMax) al interactuar con ellos.
- Diseño responsive, adaptado tanto a móvil como a escritorio, construido sobre varios plugins de la plataforma Codrops (DragSlideshow, StackSlider).

## Tecnologías

- HTML5 / CSS3 (con `normalize.css`)
- JavaScript vanilla + jQuery
- TweenMax / TimelineLite (animaciones)
- Plugins de Codrops: `dragdealer.js`, `dragslideshow.js`, `jquery.stackslider.js`, `classie.js`
- Modernizr, Font Awesome

## Instalación / Cómo ejecutarlo

No requiere instalación ni servidor:

1. Clona el repositorio.
2. Abre `public/index.html` directamente en un navegador (Chrome, Firefox, Edge, etc.), o sírvelo con cualquier servidor estático.

Proyecto de portafolio: página promocional estática construida integrando y adaptando varios plugins/efectos de terceros (Codrops) sobre un diseño propio.

## Licencia

GPL versión 3 (ver archivo [LICENSE](LICENSE)).
