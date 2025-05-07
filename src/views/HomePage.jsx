import { Link } from "react-router-dom";
import LoginForm from "../components/LoginForm";

export default function HomePage() {
    return (
        <div style={{ maxWidth: "600px", margin: "50px auto", textAlign: "center", padding: "20px" }}>
            <h2>Velkommen til vores platform</h2>
            <p>Log ind for at få adgang for at opleve de eksklusive funktioner, vi tilbyder.</p>

            <p>Har du ikke en konto endnu? <Link to="opret">Opret en gratis konto her!</Link></p>
            <LoginForm /> 
        </div>
    );
}
