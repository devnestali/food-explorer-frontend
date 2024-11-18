import { Container } from "./styles";

import mealImage from "../../assets/mealphoto.svg";

import { LuChevronRight, LuMinus, LuPlus, LuHeart } from "react-icons/lu";

import { Button } from "../Button";


export function Meal({ data }) {
    return (
        <Container className="meal">
            <a href="#"><LuHeart /></a>
            <img src={mealImage} alt="" />
            <div className="mealTitle">
                <h2>Salada Ravanello</h2>
                <LuChevronRight />
            </div>
            <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
            <span>R$ 25,97</span>
            <div className="buttons">
                <div className="amount">
                    <button><LuMinus /></button>
                    <span>01</span>
                    <button><LuPlus /></button>
                </div>
                <Button title="incluir" toMeal />
            </div>
        </Container>
    )
}