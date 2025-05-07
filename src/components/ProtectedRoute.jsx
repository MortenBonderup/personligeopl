import { Navigate } from "react-router-dom"; // Importerer Navigate-komponenten for at kunne omdirigere brugeren
import { useAuthState } from "react-firebase-hooks/auth"; // Importerer en hook til at overvåge brugerens autentifikationstilstand
import { auth } from "../firebase"; // Importerer autentifikationsobjektet fra en separat firebase-konfiguration

const ProtectedRoute = ({ element }) => {
  const [user, loading, error] = useAuthState(auth); // Henter brugerens autentifikationstilstand og en loading-indikator

  if (loading) return <p>Loading...</p>; // Hvis autentifikationen stadig indlæses (og user er "undefined"), viser vi en loading-tekst
  if (error) return <p>Fejl: {error.message}</p>; // Hvis autentifikationen fejler, viser vi en fejlmeddelelse
  return user ? element : <Navigate to="/" />; // Hvis brugeren er logget ind, viser vi det beskyttede element; ellers omdirigeres de til forsiden
};

export default ProtectedRoute; 
