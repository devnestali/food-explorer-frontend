import { Container, MainHeader, Meals } from "./styles";

import { Header } from '../../components/Header';
import { Wrapper } from '../../components/Wrapper';
import { Meal } from '../../components/Meal';
import { Footer } from '../../components/Footer';

import { api } from "../../services/api";
import { showToasts } from "../../utils/toasts";

import mainImage from '../../assets/mainImage.png';

import { LuChevronRight, LuChevronLeft } from "react-icons/lu";

import { useEffect, useState } from "react";

export function HomeAdmin() {
    const [dishData, setDishData] = useState([]);
    const [dessertData, setDessertData] = useState([]);
    
    useEffect(() => {
        async function fetchDishData() {
            try {
                const response = await api.get(`/dish`);
                setDishData(response.data);
            } catch (error) {
                if(error.message) {
                    showToasts.error(error.response.data.message);
                } else {
                    console.error(error);
                }
            };
        };
        
        fetchDishData();
    }, []);

    useEffect(() => {
        async function fetchDessertData() {
            try {
                const response = await api.get('/dessert');
                setDessertData(response.data);
            } catch (error) {
                if(error.message) {
                    showToasts.error(error.response.data.message);
                } else {
                    console.error(error);
                }
            }
        };

        fetchDessertData();
    }, []);
    return (
        <Container>
            <Header toAdmin />

            <main>
                <Wrapper>
                    <MainHeader>
                        <img src={mainImage} alt="Biscoitos" />

                        <div className="mainHeaderTitle">
                            <h2>Sabores inigualáveis</h2>
                            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
                        </div>
                    </MainHeader> 
                    <h2>Refeições</h2>
                    <Meals>
                        <a href=""><LuChevronRight /></a>
                        {
                            dishData && dishData.map((item) => (
                                <Meal 
                                    key={String(item.id)}
                                    data={item}
                                    toAdmin 
                                />
                            ))
                        }
                        <a href=""><LuChevronLeft /></a>
                    </Meals>
                    
                    <h2>Sobremesas</h2>
                    <Meals>
                        <a href="#"><LuChevronRight /></a>
                        {
                            dessertData && dessertData.map((item) => (
                                <Meal 
                                    key={String(item.id)}
                                    data={item}
                                    toAdmin
                                />
                            ))
                        }
                        <a href="#"><LuChevronLeft /></a>
                    </Meals>
                    
                    <h2>Bebidas</h2>
                    <Meals>
                        <a href="#"><LuChevronRight /></a>
                        <Meal toAdmin />
                        <Meal toAdmin />
                        <Meal toAdmin />
                        <Meal toAdmin />
                        <Meal toAdmin />
                        <a href="#"><LuChevronLeft /></a>
                    </Meals>

                </Wrapper>
                
                <Footer />
            </main>
        </Container>
    )
}