import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./views/HomePage";
import UserPage from "./views/UserPage";
import AdminPage from "./views/AdminPage";
import ProtectedRoute from "./components/ProtectedRoute";
import './App.css';
import CreateUser from "./views/CreateUser";
import LogoutOnClose from "./components/LogoutOnClose";
import CreatePage from "./views/CreatePage";
import UpdatePage from "./views/UpdatePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "user",
                element: <UserPage />,
            },
            {
                path: "admin", // Definerer stien til "admin"-siden
                element: <ProtectedRoute element={<AdminPage />} />, // Beskytter admin-siden ved at indpakke den i "ProtectedRoute"
            },  
            {
                path: "opret",
                element: <CreateUser />,
            },
            {
                path: "create",
                element: <ProtectedRoute element={<CreatePage />} />,
            },
            {
                path: "posts/:postId",
                element: <ProtectedRoute element={<UpdatePage />} />,
            },
        ],
    },
]);

function App() {
    return (
        <>
            <LogoutOnClose />
            <RouterProvider router={router} />
        </>
    );
}

export default App;
