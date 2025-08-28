<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Rutas públicas
import LoginPage from './pages/LoginPage/LoginPage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage/ForgotPasswordPage';
import NotFoundPage from  './pages/components/NotFoundPage';

// Rutas para hooks
import UseStatePlay from './pages/Playground/UseStatePlay';
import UseEffectPlay from './pages/Playground/UseEffectPlay';
import UseRefPlay from './pages/Playground/UseRefPlay';

// Protege rutas con autenticación Firebase
import ProtectedRoute from './pages/components/ProtectedRoute';
import DashboardPage from './pages/DashboardPage/DashboardPage';
import ResetPasswordPage from './pages/ResetPasswordPage/ResetPasswordPage';
import AuxiliaresPage from './pages/AuxiliaresPage/AuxiliaresPage';
=======
import { BrowserRouter } from "react-router-dom";
import Forgot from "./pages/ForgotPage/ForgotPage.jsx";
import LoginPage from "./pages/LoginPage/LoginPage.jsx";
import Register from "./pages/RegisterPage/RegisterPage.jsx";
import Hooks from "./playground/HooksGeneral.jsx";
import UseState from "./playground/useState.jsx";


import { Route, Routes } from "react-router-dom";
import './App.css';

>>>>>>> 6331fb5ee0aa14d6d8f1958002c3b0e18317183c

function App() {
  return (
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        {/* Rutas públicas */}
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />

        {/* Rutas protegidas con Firebase Auth */}
        <Route path="/dashboard" element={<ProtectedRoute> <DashboardPage /> </ProtectedRoute> } />
        <Route path="/auxiliares" element={<ProtectedRoute> <AuxiliaresPage /> </ProtectedRoute> } />

        {/* Ruta genérica para páginas no encontradas */}
        <Route path="*" element={<NotFoundPage />} />

        {/* Rutas para prácticas de hooks */}
        <Route path="/usestate" element={<UseStatePlay />} />
        <Route path="/useeffect" element={<UseEffectPlay />} />
        <Route path="/useref" element={<UseRefPlay />} />
=======
        <Route path="/" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/hooks" element={<Hooks />} />
        <Route path="/UseState" element={<UseState />} />
        
>>>>>>> 6331fb5ee0aa14d6d8f1958002c3b0e18317183c
      </Routes>
    </BrowserRouter>
  );
}

export default App;