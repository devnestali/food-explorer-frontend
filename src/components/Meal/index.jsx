import { motion } from "motion/react";

import { Container, MealTitle, Amount, Buttons } from "./styles";

import { LuChevronRight, LuMinus, LuPlus, LuHeart, LuPencil } from "react-icons/lu";

import { Button } from "../Button";

import { showToasts } from "../../utils/toasts";

import { useNavigate } from "react-router-dom";
import { useState } from "react";


export function Meal({ data, toAdmin, image, ...rest }) {
    const [isClicked, setIsClicked] = useState(false);
    const [amount, setAmount] = useState(0);

    const navigate = useNavigate();

    function handleClickToMeal() {
        switch (data.type) {
            case "dish":
                return navigate(`/dish/${data.id}`);
            case "dessert":
                return navigate(`/dessert/${data.id}`);
            case "drink": 
                return navigate(`/drink/${data.id}`);
        };
    };

    function handleClickToHeart() {
        setIsClicked(!isClicked);
    };

    function handleAmountClickPlus() {
        setAmount(amount => amount + 1);
    };

    function handleAmountClickMinus() {
        if (amount > 0) {
            setAmount(amount => amount - 1);
        } else {
            showToasts.error('A quantidade tem que ser maior que 0.');
        }
    };
    
    return (
        <Container className="meal" {...rest}>
            <motion.div
                className="favorite"
                whileHover={{ scale: 1.2 }} 
                whileTap={{ scale: 0.8 }}
                onClick={handleClickToHeart}
            >
                <button type="button">{toAdmin ? <LuPencil onClick={handleClickToMeal}/> : <LuHeart style={{ fill: isClicked ? 'red' : '', color: isClicked ? 'red' : ''}}/>}</button>
            </motion.div>
            <img src={image} alt="Imagem da refeição" />
            <MealTitle>
                <h2>{data?.title}</h2>
                <LuChevronRight />
            </MealTitle>
            <p>{data?.description}</p>
            <span>{`R$ ${data?.price}`}</span>
            {
            !toAdmin && <Buttons>
                            <Amount>
                                <button onClick={handleAmountClickMinus}><LuMinus /></button>
                                <span>{amount}</span>
                                <button onClick={handleAmountClickPlus}><LuPlus /></button>
                            </Amount>
                            <Button title="incluir" toMeal onClick={() => handleClickToMeal(data.type)}/>
                        </Buttons>
            }
        </Container>
    )
};