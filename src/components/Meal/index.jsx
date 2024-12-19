import { motion } from "motion/react";

import { Container, MealTitle, Amount, Buttons } from "./styles";

import mealImage from "../../assets/mealphoto.svg";

import { LuChevronRight, LuMinus, LuPlus, LuHeart, LuPencil } from "react-icons/lu";

import { Button } from "../Button";

import { useNavigate } from "react-router-dom";


export function Meal({ data, toAdmin, ...rest }) {
    const navigate = useNavigate();
    console.log(data?.title)

    function handleClickToMeal() {
        navigate('/dish');
    }
    
    return (
        <Container className="meal" {...rest}>
            <motion.div
                className="favorite"
                whileHover={{ scale: 1.2 }} 
                whileTap={{ scale: 0.8 }}
            >
                <button type="button">{toAdmin ? <LuPencil onClick={handleClickToMeal}/> : <LuHeart />}</button>
            </motion.div>
            <img src={mealImage} alt="" />
            <MealTitle>
                <h2>{data?.title}</h2>
                <LuChevronRight />
            </MealTitle>
            <p>{data?.description}</p>
            <span>{`R$ ${data?.price}`}</span>
            {
            !toAdmin && <Buttons>
                            <Amount>
                                <button><LuMinus /></button>
                                <span>01</span>
                                <button><LuPlus /></button>
                            </Amount>
                            <Button title="incluir" toMeal onClick={handleClickToMeal}/>
                        </Buttons>
            }
        </Container>
    )
};