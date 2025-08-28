# Proyecto React - Curso de Enseñanza

Este es un proyecto base en **React** creado con **Create React App**, que incluye:

- [SweetAlert2](https://sweetalert2.github.io/) para alertas y confirmaciones atractivas.
- [React Router DOM](https://reactrouter.com/) para navegación entre páginas.
- [Firebase](https://firebase.google.com/) para autenticación, hosting y base de datos.

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
**Firebase**
```bash
npm i firebase
```

---

## Despliegue en Firebase Hosting
**Instalar CLI**
```bash
npm i -g firebase-tools
```

**Iniciar sesión**
```bash
firebase login
```

**Inicializar hosting**
```bash
firebase init
```

**Generar build**
```bash
npm run build
```

**Desplegar**
```bash
firebase deploy
```


---

##  Tecnologías Utilizadas

| Tecnología              | Logo                                                                 | Descripción                                                                                   |
|------------------------|----------------------------------------------------------------------|-----------------------------------------------------------------------------------------------|
| **HTML5**              | ![HTML5](https://img.icons8.com/color/48/html-5--v1.png)              | Lenguaje de marcado usado para estructurar las páginas web.                                  |
| **CSS3**               | ![CSS3](https://img.icons8.com/color/48/css3.png)                     | Hojas           | Framework CSS para facilitar el diseño responsive y atractivo.                               |
| **JavaScript**         | ![JS](https://img.icons8.com/color/48/javascript--v1.png)             | Lenguaje de programación para la lógica y la interactividad en la web.                       |
| **React**              | ![React](https://img.icons8.com/color/48/react-native.png)            | Biblioteca de JavaScript para construir interfaces de usuario basadas en componentes.        |

---

##  Estructura del Proyecto

```plaintext

📂 Estructura del Proyecto

/
├── public/
│   ├── favicon.ico             # Ícono de la aplicación
│   ├── index.html              # Plantilla HTML principal
│   ├── logo192.png             # Logo versión 192px
│   ├── logo512.png             # Logo versión 512px
│   ├── manifest.json           # Configuración PWA (Progressive Web App)
│   └── robots.txt              # Configuración para bots de indexación
│
├── src/
│   ├── assets/                 # Recursos estáticos (imágenes, íconos, etc.)
│   │   ├── brilla.png
│   │   └── user.png
│   │
│   ├── components/             # Componentes reutilizables
│   │   ├── NotFoundPage.jsx
│   │   ├── ProtectedRoute.jsx
│   │   └── Spinner.jsx
│   │
│   ├── pages/                  # Vistas completas (pantallas principales)
│   │   ├── AuxiliaresPage/
│   │   │   ├── AuxiliaresPage.css
│   │   │   └── AuxiliaresPage.js
│   │   ├── DashboardPage/
│   │   │   ├── DashboardPage.css
│   │   │   └── DashboardPage.js
│   │   ├── ForgotPasswordPage/
│   │   │   ├── ForgotPasswordPage.css
│   │   │   └── ForgotPasswordPage.js
│   │   ├── LoginPage/
│   │   │   ├── LoginPage.css
│   │   │   └── LoginPage.js
│   │   ├── RegisterPage/
│   │   │   ├── RegisterPage.css
│   │   │   └── RegisterPage.js
│   │   ├── ResetPasswordPage/
│   │   │   ├── ResetPasswordPage.css
│   │   │   └── ResetPasswordPage.js
│   │   └── Playground/          # Espacio para pruebas rápidas
│   │       ├── readme.md
│   │       ├── UseEffectPlay.js
│   │       ├── UseRefPlay.js
│   │       └── UseStatePlay.js
│   │
│   ├── utils/                  # Funciones y utilidades generales
│   │   └── alerts.js
│   │
│   ├── App.css                 # Estilos globales de la app
│   ├── App.js                  # Componente raíz
│   ├── App.test.js             # Pruebas del componente raíz
│   ├── firebase.js             # Configuración de Firebase
│   ├── index.css               # Estilos del index
│   ├── index.js                # Punto de entrada principal
│   ├── logo.svg                # Logo SVG base
│   ├── reportWebVitals.js      # Métricas de rendimiento
│   └── setupTests.js           # Configuración de entorno de testing
│
├── .gitignore                  # Archivos y carpetas a ignorar por Git
├── .firebase/                   # Configuración del proyecto Firebase
├── firebase.json               # Configuración de Firebase Hosting
├── firestore.indexes.json      # Índices de Firestore
├── firestore.rules             # Reglas de seguridad de Firestore
├── package.json                # Configuración y dependencias
├── package-lock.json           # Bloqueo de versiones de dependencias
└── README.md                   # Documentación del proyecto

```
