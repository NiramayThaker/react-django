import { Navigate, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {jwtDecode} from 'jwt-decode';
import api from '../api';
import { ACCESS_TOKEN, REFRESH_TOKEN } from '../constants';

function ProtectedRoute({ children }) { 
    const [ isAuthorized, setIsAuthorized ] = useState(null);

    useEffect(() => {
        auth().catch(isAuthorized(false));
    }, []);

    const refreshToken = async () => {
        const refreshToken = localStorage.getItem(REFRESH_TOKEN);
        try {
            const res = await api.post("/api/token/refresh", {
                refresh: refreshToken,
            });
            if (res.status === 200) {
                localStorage.setItem(ACCESS_TOKEN, res.data.access);
                setIsAuthorized(true);
            }
            else setIsAuthorized(false);

        } catch (error) {
            setIsAuthorized(false);
            console.log(error);
        }
    }

    const auth = async () => {
        // if the token is expired, refresh it by it's own in background
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            // if we don't have a token, we are not authorized
            setIsAuthorized(false);
            return;
        }
        // decode the token if we have one
        const decoded = jwtDecode(token);
        const tokenExpired = decoded.exp
        const now = Date.now() / 1000;
        if (tokenExpired < now) {
            // if the token is expired, refresh it
            await refreshToken();
        } else {
            // if the token is not expired, we are authorized
            setIsAuthorized(true);
        }
    }

    if (isAuthorized === null) {
        return <div>Loading...</div>
    }

    return isAuthorized ? children : <Navigate to="/login" />
}

export default ProtectedRoute;