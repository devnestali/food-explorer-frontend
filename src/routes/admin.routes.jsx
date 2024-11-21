import { Routes, Route } from "react-router-dom";

import { NotFound } from "../pages/NotFound";
import { HomeAdmin } from "../pages/HomeAdmin";
import { DishAdmin } from "../pages/DishAdmin";

export function AdminRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomeAdmin />}/>
            <Route path="/dish" element={<DishAdmin />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}