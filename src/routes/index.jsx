import { BrowserRouter } from "react-router-dom";

import { UserRoutes } from "./user.routes";
import { AuthRoutes } from "./auth.routes";


export function Routes() {
    return (
        <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
            <AuthRoutes />
        </BrowserRouter>
    )
}