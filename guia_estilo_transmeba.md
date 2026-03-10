# **Guía de Estilo y Marca: Rediseño Transmeba Carga**

## **1\. Visión General de la Marca**

Transmeba Carga es una empresa de soluciones logísticas y transporte de carga. El nuevo rediseño debe proyectar **seguridad, solidez, rapidez y tecnología**. El sitio web dejará atrás el aspecto anticuado para adoptar un diseño corporativo moderno, limpio y orientado a la conversión (B2B).

**Atributos de la marca:** Profesional, Confiable, Eficiente, Moderna.

## **2\. Paleta de Colores (Propuesta Moderna)**

En el código anterior se notaba falta de contraste y una paleta no estandarizada. Para logística, la combinación de Azules (confianza/corporativo) y Naranjas/Amarillos (acción/rapidez) es el estándar de oro.

* **Color Principal (Primary):** Azul Marino Profundo  
  * HEX: \#0A2540 o \#1E3A8A (Tailwind: blue-900)  
  * *Uso:* Barra de navegación, pie de página, encabezados principales (H1, H2) y fondos de secciones sólidas.  
* **Color Secundario / Acción (Accent):** Naranja Seguridad  
  * HEX: \#F97316 (Tailwind: orange-500)  
  * *Uso:* Botones principales (Call to Action como "Cotizar Envío"), íconos de servicios, y subrayados o detalles visuales para llamar la atención.  
* **Color de Fondo (Background):** Blanco Roto / Gris Claro  
  * HEX: \#F8FAFC (Tailwind: slate-50)  
  * *Uso:* Fondo principal de la página web para dar respiro y separar secciones sin usar líneas duras.  
* **Colores de Texto:**  
  * *Texto Principal:* \#334155 (Tailwind: slate-700) \- Más suave para la vista que el negro puro.  
  * *Texto Secundario:* \#64748B (Tailwind: slate-500) \- Para subtítulos y descripciones menores.

## **3\. Tipografía**

El sitio web antiguo utilizaba Nunito, una fuente muy redondeada y amigable, pero que resta un poco de seriedad corporativa. Propongo el siguiente cambio:

* **Fuente para Encabezados (Headings \- H1, H2, H3): Montserrat o Inter**  
  * *Estilo:* Bold (700) o ExtraBold (800).  
  * *Justificación:* Transmite peso, estructura industrial y solidez.  
* **Fuente para Párrafos (Body Text): Inter o Roboto**  
  * *Estilo:* Regular (400) y Medium (500).  
  * *Justificación:* Extremadamente legible en pantallas móviles y de escritorio, aspecto limpio y tecnológico.

*(Instrucción para la IA: Usar Google Fonts para importar Inter y aplicarla globalmente).*

## **4\. Estilo Visual y Componentes UI (Instrucciones para Tailwind CSS)**

* **Botones (Buttons):** \* Deben tener esquinas ligeramente redondeadas (rounded-md o rounded-lg).  
  * El botón primario debe ser Naranja con texto blanco (bg-orange-500 text-white hover:bg-orange-600 transition-colors).  
* **Tarjetas (Cards) para Servicios:**  
  * Fondo blanco (bg-white), esquinas redondeadas (rounded-xl), y una sombra suave (shadow-md o shadow-lg).  
  * Efecto hover: Que la tarjeta se eleve ligeramente al pasar el mouse (hover:-translate-y-1 hover:shadow-xl transition-all duration-300).  
* **Fotografía e Imágenes:**  
  * Usar imágenes de alta calidad con superposiciones (overlays) oscuras para asegurar que el texto blanco sea legible encima de ellas (ej. en el Hero Section).  
  * Los logotipos de los clientes (como Alion, CPA, Coimpresores) deben ir en una franja en escala de grises (grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all) para no saturar la página de colores.  
* **Íconos:**  
  * Reemplazar FontAwesome (usado en el código antiguo) por **Lucide React** o SVG en línea con diseño de trazo limpio (stroke-width: 1.5 o 2).

## **5\. Estructura Base de la Página (Landing Page)**

Para iniciar el desarrollo con Traycer AI, divide el trabajo en estas secciones (Fases):

1. **Navbar (Navegación):** Logo a la izquierda, enlaces limpios en el centro, botón de "Rastrea tu carga" o "Contacto" a la derecha. Sticky header (que siga al bajar).  
2. **Hero Section:** Imagen de fondo impactante (camiones/logística), título grande en H1 ("Soluciones Logísticas Seguras y Eficientes"), subtítulo breve y dos botones: "Nuestros Servicios" y "Cotizar ahora".  
3. **Carrusel de Clientes (Social Proof):** Usar las imágenes subidas (alion.png, CPA-de-colombia.jpg, etc.) en una fila continua.  
4. **Sección de Servicios:** Grid de 3 o 4 columnas con tarjetas detallando (Transporte terrestre, Almacenamiento, etc.). Cada tarjeta con un ícono representativo.  
5. **¿Por qué elegirnos?:** Breve sección con estadísticas o viñetas con checks verdes/naranjas (Experiencia, Seguridad, Flota moderna).  
6. **Footer (Pie de página):** Datos de contacto, links rápidos, redes sociales y aviso legal. Color de fondo: \#0A2540 con texto blanco/gris claro.

## **6\. Prompt Maestro para Traycer AI / Windsurf**

Puedes copiar y pegar el siguiente texto como primer mensaje o instrucción principal en tu editor para configurar el proyecto:

\*"Actúa como un Desarrollador Frontend Experto. Vamos a reconstruir la página web de 'Transmeba Carga' desde cero utilizando React y Tailwind CSS en un solo archivo (o en la estructura que uses).

REGLAS DE DISEÑO:

* Usa Tailwind CSS para todos los estilos.  
* Paleta de colores: Usa slate-900 y blue-900 para fondos oscuros y textos principales, orange-500 para botones primarios y CTAs, y slate-50 para el fondo de la aplicación.  
* Tipografía: Usa fuentes sans-serif modernas e importadas de Google Fonts (Inter para el cuerpo).  
* Estilo de UI: Moderno, limpio, B2B. Tarjetas con sombras suaves (shadow-lg, rounded-xl), mucho espacio en blanco (padding y gap generosos).  
* Íconos: Usa Lucide-react para los íconos representativos de logística.

Por favor, empieza construyendo la estructura base de la aplicación y la sección del Navbar."\*