import { useEffect } from "react";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";

const LogoutOnClose = () => {
    useEffect(() => {
        // Funktion til at logge brugeren ud, når vinduet lukkes
        const handleUnload = () => {
            signOut(auth).catch((error) => console.error("Logout fejlede:", error));
        };

        // Lytter til "beforeunload"-hændelsen, som aktiveres, når brugeren lukker eller genindlæser siden
        window.addEventListener("beforeunload", handleUnload);

        // Rengøring af event listener ved afmontering af komponenten, for at undgå hukommelseslæk
        return () => {
            window.removeEventListener("beforeunload", handleUnload);
        };
    }, []);

    return null; // Ingen UI, kun funktionalitet
};

export default LogoutOnClose;
