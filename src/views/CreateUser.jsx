import { useState } from "react";
import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "../firebase"; 
import styles from "./CreateUser.module.css"; // Importér CSS Module
import { useNavigate } from "react-router-dom";

const CreateUser = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password); // Opretter en ny bruger med e-mail og adgangskode i Firebase Authentication
      alert("Bruger oprettet!"); // Viser en besked til brugeren om, at kontoen er blevet oprettet
      sessionStorage.setItem("email", email);
      navigate("/admin");
    } catch (error) {
      setError(error.message); // Hvis der opstår en fejl, gemmes fejlbeskeden i state for at kunne vises i UI
    }
  };

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password); // Logger brugeren ind med e-mail og adgangskode
      console.log("Login succesfuldt!"); // Skriver en besked i konsollen for at indikere en vellykket login
      sessionStorage.setItem("email", email); // Gemmer email midlertidigt i sessionStorage, så det kan bruges senere i sessionen
      navigate("/admin"); // Omdirigerer brugeren til admin-siden efter succesfuldt login
    } catch (error) {
      setError(error.message); // Hvis der opstår en fejl, gemmes fejlbeskeden i state for at kunne vises i UI
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Brugerregistrering</h2>
      <input className={styles.input} type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input className={styles.input} type="password" placeholder="Adgangskode" onChange={(e) => setPassword(e.target.value)} />
      <button className={styles.registerBtn} onClick={handleRegister}>Registrer og Log ind</button>
      <button className={styles.loginBtn} onClick={handleLogin}>Log ind</button>
      {error && <p className={styles.errorMessage}>{error}</p>}
    </div>
  );
};

export default CreateUser;
