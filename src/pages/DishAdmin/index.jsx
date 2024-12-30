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

export function DishAdmin() {
    const [data, setData] = useState(null);
    const navigate = useNavigate()

    const { id } = useParams();

    const { pathname } = useLocation();
    const path = pathname.split("/")[1];
    
    function handleClickToEdit() {
        navigate("/edit");
    };

    async function fetchDishData() {
        const response = await api.get(`/dish/${id}`);
        setData(response.data);
    };

    async function fetchDessertData() {
        const response = await api.get(`/dessert/${id}`);
        setData(response.data);
    };

    async function fetchDrinkData() {
        const response = await api.get(`/drink/${id}`);
        setData(response.data);
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
                            <img src={MealPhoto} alt="meal" />

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