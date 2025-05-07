import { auth } from '../firebase';
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";


export default function Logout() {
    const navigate = useNavigate()

    async function handleLogout() {
        try {
            signOut(auth);
            sessionStorage.removeItem('email');
            navigate("/");
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
            <button type="button" onClick={handleLogout}>Logout</button>
        </>
    )

}