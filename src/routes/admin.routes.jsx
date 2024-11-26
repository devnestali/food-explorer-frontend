import { Routes, Route } from "react-router-dom";

import { NotFound } from "../pages/NotFound";
import { HomeAdmin } from "../pages/HomeAdmin";
import { DishAdmin } from "../pages/DishAdmin";
import { AddAdmin } from "../pages/AddAdmin";
import { EditAdmin } from "../pages/EditAdmin";

export function AdminRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomeAdmin />}/>
            <Route path="/dish" element={<DishAdmin />}/>
            <Route path="/add" element={<AddAdmin />}/>
            <Route path="/edit" element={<EditAdmin />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}