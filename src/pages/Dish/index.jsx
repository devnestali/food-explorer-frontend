import { Container, InfoMeal, DetailsMeal, Buttons } from "./styles"

import { Header } from '../../components/Header'
import { Wrapper } from '../../components/Wrapper'
import { ButtonText } from '../../components/ButtonText'
import { Button } from '../../components/Button'

import { LuChevronLeft, LuMinus, LuPlus } from'react-icons/lu'

import MealPhoto from '../../assets/mealphoto.svg'
import { Ingredient } from "../../components/Ingredient"

import { api } from "../../services/api"

import { useNavigate, useParams, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

 
export function Dish() {
    const [data, setData] = useState(); 
    const navigate = useNavigate();
    
    const { id } = useParams();
    
    const location = useLocation();
    const path = location.pathname.split('/')[1];

    function handleOrder() {
        navigate("/");
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
            <Header />

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
                                <div className="amount">
                                    <button><LuMinus /></button>
                                    <span>01</span>
                                    <button><LuPlus /></button>
                                </div>
                                <Button title={`incluir ∙ R$ ${data?.price}`} toMeal onClick={handleOrder}/>
                            </Buttons>
                        </DetailsMeal>
                    </InfoMeal>
                </Wrapper>
            </main>
        </Container>
    )
}