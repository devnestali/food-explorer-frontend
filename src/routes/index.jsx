import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";

import { UserRoutes } from "./user.routes";
import { AdminRoutes } from "./admin.routes";

import { Toaster } from "sonner";
import { useAuth } from "../hooks/auth";


export function Routes() {
    const { userData } = useAuth();

    function AccessRoute() {
        switch (userData.role) {
            case 'admin': 
                return <AdminRoutes />
            case 'user':
                return <UserRoutes />
            default:
                return <UserRoutes />
        }
    };
    
    return (
        <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
            <Toaster />
            { userData ? <AccessRoute /> : <AuthRoutes /> }
        </BrowserRouter>
    )
}