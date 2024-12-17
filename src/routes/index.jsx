import { BrowserRouter } from "react-router-dom";

import { AuthRoutes } from "./auth.routes";

import { UserRoutes } from "./user.routes";
import { AdminRoutes } from "./admin.routes";
import { Toaster } from "sonner";


export function Routes() {
    return (
        <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
            <Toaster />
            <AuthRoutes />
        </BrowserRouter>
    )
}