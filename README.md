# Proyecto React - Curso de Enseñanza

Este es un proyecto base en **React** creado con **Create React App**, que incluye:

- [Bootstrap](https://getbootstrap.com/) para estilos rápidos y responsive.
- [SweetAlert2](https://sweetalert2.github.io/) para alertas y confirmaciones atractivas.

---

##  Instalación y ejecución

1. **Crear el proyecto con Create React App**
    
    ```bash
    npx create-react-app nombre-del-proyecto
    ```

2. **Ingresar a la carpeta del proyecto**
    
    ```bash
    cd nombre-del-proyecto
    ```

3. **Ejecutar el proyecto en modo desarrollo**
    
    ```bash
    npm start
    ```

---

##  Dependencias instaladas

**Bootstrap**
```bash
npm install bootstrap
```
**SweetAlert2**
```bash
npm install SweetAlert2
```
**React Router Dom**
```bash
npm i react-router-dom
```

---

##  Tecnologías Utilizadas

| Tecnología              | Logo                                                                 | Descripción                                                                                   |
|------------------------|----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| **HTML5**              | ![HTML5](https://img.icons8.com/color/48/html-5--v1.png)              | Lenguaje de marcado usado para estructurar las páginas web.                                  |
| **CSS3**               | ![CSS3](https://img.icons8.com/color/48/css3.png)                     | Hojas de estilo para personalizar la apariencia de la web.                                   |
| **Bootstrap 5**        | ![Bootstrap](https://img.icons8.com/color/48/bootstrap.png)           | Framework CSS para facilitar el diseño responsive y atractivo.                               |
| **JavaScript**         | ![JS](https://img.icons8.com/color/48/javascript--v1.png)             | Lenguaje de programación para la lógica y la interactividad en la web.                       |
| **React**              | ![React](https://img.icons8.com/color/48/react-native.png)            | Biblioteca de JavaScript para construir interfaces de usuario basadas en componentes.        |
| **Create React App**   | ![CRA](https://img.icons8.com/?size=48&id=t9R7H4l3cOyb&format=png)     | Herramienta oficial para crear proyectos React con configuración inicial lista para usar.    |
| **SweetAlert2**        | ![SweetAlert2](https://img.icons8.com/external-flat-icons-inmotus-design/48/external-alert-user-interface-flat-icons-inmotus-design.png) | Librería JS para mostrar alertas modernas, elegantes y personalizadas. |

---

##  Estructura del Proyecto

```plaintext
/
├── public/
│   ├── index.html            # Plantilla HTML principal de la app
│   └── favicon.ico           # Ícono de la aplicación
├── src/
│   ├── assets/               # Recursos estáticos (imágenes, íconos, etc.)
│   ├── components/           # Componentes reutilizables
│   ├── pages/                # Páginas completas (vistas o interfaces completas)
|       ├── ForgotPage/
|       |         └──ForgotPage.jsx
|       ├── LoginPage/
|       |         └──LoginPage.jsx
|       └── RegisterPage/
|                 └──RegisterPage.jsx
│   ├── playground/           # Espacio para pruebas rápidas|
|       ├── HooksGeneral.jsx
|       ├── loginpage.css
|       ├── loginpage.jsx
|       └── useState.jsx             
│   ├── App.css               # Estilos globales de la app
│   ├── App.js                # Componente raíz
|   ├── index.css             # Estilos del index
│   ├── index.js              # Punto de entrada principal
├── package.json              # Configuración y dependencias del proyecto
├── package-lock.json         # Bloqueo de versiones de dependencias
└── README.md                 # Documentación del proyecto

```
---

##  Avance del Proyecto

| Nº  | Fecha       | Descripción / Entregable                              |
|-----|-------------|-------------------------------------------------------|
| 1   | 2025-08-15  | Creación del proyecto con Create-React-App             |
| 2   | 2025-08-15  | Instalación y configuración de Bootstrap y SweetAlert2 |
| 3   | 2025-08-21  | Instalación y creacion de las rutas                    |


---