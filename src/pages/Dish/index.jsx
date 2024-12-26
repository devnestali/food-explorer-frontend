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

import { showToasts } from "../../utils/toasts"

import { useAuth } from "../../hooks/auth";

 
export function Dish() {
    const [data, setData] = useState(null); 
    const [amount, setAmount] = useState(1);
    const [price, setPrice] = useState(0);

    const { userRequests } = useAuth();
    
    const navigate = useNavigate();
    
    const { id } = useParams();
    
    const location = useLocation();
    const path = location.pathname.split('/')[1];

    
    function handleOrder() {
        try {
            userRequests();
            showToasts.success('Pedido realizado com sucesso.');
        } catch (error) {
            showToasts.error('Não foi possível realizar o pedido.');
        }
        navigate("/");
    };

    async function fetchDishData() {
        const response = await api.get(`/dish/${id}`);
        setData(response.data);
        setPrice(response.data.price);
    };
    
    async function fetchDessertData() {
        const response = await api.get(`/dessert/${id}`);
        setData(response.data);
        setPrice(response.data.price);
    };
    
    async function fetchDrinkData() {
        const response = await api.get(`/drink/${id}`);
        setData(response.data);
        setPrice(response.data.price);
    };
    
    function handleAmountClickPlus() {
        setAmount(amount => amount + 1);
        setPrice(price => Math.round(data.price + price));
    };

    function handleAmountClickMinus() {
        if (amount > 1) {
            setAmount(amount => amount - 1);
            setPrice(price => Math.round(price - data.price));
        } else {
            showToasts.error('A quantidade tem que ser maior que 1.');
        }
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
                                    <button onClick={handleAmountClickMinus}><LuMinus /></button>
                                    <span>{amount}</span>
                                    <button onClick={handleAmountClickPlus}><LuPlus /></button>
                                </div>
                                <Button title={`incluir ∙ R$ ${price.toFixed(2)}`} toMeal onClick={handleOrder}/>
                            </Buttons>
                        </DetailsMeal>
                    </InfoMeal>
                </Wrapper>
            </main>
        </Container>
    )
}