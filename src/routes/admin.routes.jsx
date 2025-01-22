import { Routes, Route } from "react-router-dom";

import { NotFound } from "../pages/NotFound";
import { HomeAdmin } from "../pages/HomeAdmin";
import { DishAdmin } from "../pages/DishAdmin";
import { AddAdmin } from "../pages/AddAdmin";
import { EditAdmin } from "../pages/EditAdmin";
import { SideMenuAdmin } from "../components/SideMenuAdmin";

export function AdminRoutes() {
    return (
        <Routes>
            <Route path="/" element={<HomeAdmin />}/>
            <Route path="/dish/:id" element={<DishAdmin />}/>
            <Route path="/dessert/:id" element={<DishAdmin />}/>
            <Route path="/drink/:id" element={<DishAdmin />}/>
            <Route path="/add" element={<AddAdmin />}/>
            <Route path="/edit/:path/:id" element={<EditAdmin />}/>
            <Route path="/sidemenu" element={<SideMenuAdmin />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}