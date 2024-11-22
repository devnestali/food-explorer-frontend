import { Routes, Route } from "react-router-dom";

import { NotFound } from "../pages/NotFound";
import { HomeAdmin } from "../pages/HomeAdmin";
import { DishAdmin } from "../pages/DishAdmin";
import { AddAdmin } from "../pages/AddAdmin";

export function AdminRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomeAdmin />}/>
            <Route path="/dish" element={<DishAdmin />}/>
            <Route path="/add" element={<AddAdmin />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}