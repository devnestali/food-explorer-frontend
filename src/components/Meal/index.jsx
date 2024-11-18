import { Container, MealTitle, Amount, Buttons } from "./styles";

import mealImage from "../../assets/mealphoto.svg";

import { LuChevronRight, LuMinus, LuPlus, LuHeart } from "react-icons/lu";

import { Button } from "../Button";


export function Meal({ data }) {
    return (
        <Container className="meal">
            <a href="#"><LuHeart /></a>
            <img src={mealImage} alt="" />
            <MealTitle>
                <h2>Salada Ravanello</h2>
                <LuChevronRight />
            </MealTitle>
            <p>Presunto de parma e rúcula em um pão com fermentação natural.</p>
            <span>R$ 25,97</span>
            <Buttons>
                <Amount>
                    <button><LuMinus /></button>
                    <span>01</span>
                    <button><LuPlus /></button>
                </Amount>
                <Button title="incluir" toMeal />
            </Buttons>
        </Container>
    )
}