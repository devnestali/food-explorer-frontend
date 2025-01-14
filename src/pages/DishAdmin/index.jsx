import { Container, InfoMeal, DetailsMeal, Buttons } from "./styles";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { ButtonText } from "../../components/ButtonText";
import { Ingredient } from "../../components/Ingredient";
import { Button } from "../../components/Button";

import { api } from "../../services/api";

import { LuChevronLeft } from "react-icons/lu";

import MealPhoto from "../../assets/mealphoto.svg";

import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { useAuth } from "../../hooks/auth";

export function DishAdmin() {
    const { dishImage, dessertImage, drinkImage } = useAuth();
    
    const [data, setData] = useState(null);
    const navigate = useNavigate()

    const { id } = useParams();

    const { pathname } = useLocation();
    const path = pathname.split("/")[1];
    
    function handleClickToEdit() {
        navigate(`/edit/${path}/${id}`);
    };

    async function fetchDishData() {
        const { data } = await api.get(`/dish/${id}`);

        const dishData = {
            ...data,
            url: dishImage[0]
        }

        setData(dishData);
    };

    async function fetchDessertData() {
        const { data } = await api.get(`/dessert/${id}`);
        
        const dessertData = {
            ...data,
            url: dessertImage[0]
        }

        setData(dessertData);
    };

    async function fetchDrinkData() {
        const { data } = await api.get(`/drink/${id}`);
        
        const drinkData = {
            ...data,
            url: drinkImage[0]
        }
        
        setData(drinkData);
    };

    useEffect(() => {
        switch (path) {
            case "dish":
                fetchDishData();
                break;
            case "dessert": 
                fetchDessertData();
                break;
            case "drink":
                fetchDrinkData();
                break;
        };

    }, [path]);


    return (
        <Container>
            <Header toAdmin />

                <main>
                    <Wrapper>
                        <ButtonText icon={LuChevronLeft} title="voltar" toBack />
                        <InfoMeal>
                            <img src={data?.url} alt="meal" />

                            <DetailsMeal>
                                <h2>{data?.title}</h2>
                                <p>{data?.description}</p>

                                <div className="ingredients">
                                    {
                                        data?.ingredients && data?.ingredients.map((tag, i) => (
                                            <Ingredient 
                                                key={i}
                                                name={tag}
                                            />
                                        ))
                                    }
                                </div>

                                <Buttons>
                                    <Button title="Editar prato" onClick={handleClickToEdit} toMeal />
                                </Buttons>
                            </DetailsMeal>
                        </InfoMeal>
                    </Wrapper>
                </main>
        </Container>
    )
}          