import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home"
import { Dish } from "../pages/Dish"
import { NotFound } from "../pages/NotFound";
import { SideMenu } from "../components/SideMenu";

export function UserRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/dish/:id" element={<Dish />}/>
            <Route path="/dessert/:id" element={<Dish />}/>
            <Route path="/drink/:id" element={<Dish />}/>
            <Route path="/sidemenu" element={<SideMenu />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}