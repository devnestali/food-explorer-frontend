import { Routes, Route } from "react-router-dom";

import { NotFound } from "../pages/NotFound";
import { HomeAdmin } from "../pages/HomeAdmin";

export function AdminRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomeAdmin />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}