// imports...
import { auth } from '../../firebase';
import { useAuthState } from 'react-firebase-hooks/auth';
import logo from '../../assets/brilla.png';
import userDefault from '../../assets/user.png'; 
import './DashboardPage.css';
import Footer from '../components/Footer';
import HeaderNavbar from '../components/Navbar';

function DashboardPage() {
  const [user] = useAuthState(auth);

  // Determinar foto de usuario
  const userPhoto = user?.photoURL || userDefault;

  // Agregamos el console.log para verificar qué foto se está usando
  console.log(
    user?.photoURL
      ? `Usuario tiene foto: ${user.photoURL}`
      : `Usuario SIN foto, se usará: ${userDefault}`
  );

  return (
    <>
      {/* NAVBAR */}
      <HeaderNavbar />

      {/* CONTENIDO PRINCIPAL */}
      <main className="main-content">
        <div>
          <img src={logo} alt="Brilla Logo" className="main-logo" />
          <h1 className="welcome-title">Welcome to Brilla System</h1>
          <p className="welcome-text">
            Manage your clients, services, and more efficiently!
          </p>

          <p className="welcome-text">
            <strong>Nombre:</strong> {user?.displayName || "Sin nombre"}
          </p>
          <p className="welcome-text">
            <strong>Email:</strong> {user?.email || "Sin correo"}
          </p>
          <img
            src={userPhoto}
            alt="Foto de usuario"
            className="main-logo"
            style={{ maxWidth: '100px', borderRadius: '50%' }}
          />
        </div>
      </main>

      {/* FOOTER */}
      <Footer />
    </>
  );
}

export default DashboardPage;