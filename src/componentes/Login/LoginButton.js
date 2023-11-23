import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from 'react-router-dom';
import "./login.css";

const LoginButton = () => {
    const { loginWithRedirect, isAuthenticated, user, getAccessTokenSilently } = useAuth0();
    const navigate = useNavigate();

    const handleLogin = async () => {
        await loginWithRedirect();
    };

    // Este efecto se ejecutará después de que el usuario se autentique
    React.useEffect(() => {
        const checkUserRole = async () => {
            if (isAuthenticated) {
                // Obtén el token de acceso para verificar el rol del usuario si es necesario
                const token = await getAccessTokenSilently();

                // Verifica si el usuario es admin (deberías validar esto de acuerdo a tus datos)
                if (user.email === "admin@gmail.com" || user.name === "admin@gmail.com" && user.password === "Admin123") {
                    navigate("/ShowProductos");
                }
            }
        };

        checkUserRole();
    }, [isAuthenticated, user, navigate, getAccessTokenSilently]);

    return (
        <div>
            <button className="button-login" onClick={handleLogin}>
                login
            </button>
        </div>
    );
};

export default LoginButton;
