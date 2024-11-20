import { Routes, Route } from "react-router-dom";

import { Home } from "../pages/Home"
import { Dish } from "../pages/Dish"
import { NotFound } from "../pages/NotFound";

export function UserRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/dish" element={<Dish />}/>
            <Route path="*" element={<NotFound />}/>
        </Routes>
    )
}