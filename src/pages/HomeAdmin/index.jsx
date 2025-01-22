import { Carousel, Container, MainHeader, Meals } from "./styles";

import { Header } from '../../components/Header';
import { Wrapper } from '../../components/Wrapper';
import { Meal } from '../../components/Meal';
import { Footer } from '../../components/Footer';

import { api } from "../../services/api";
import { showToasts } from "../../utils/toasts";

import mainImage from '../../assets/mainImage.png';

import { LuChevronRight, LuChevronLeft, LuMenu } from "react-icons/lu";

import { useEffect, useRef, useState } from "react";

import { useAuth } from "../../hooks/auth";

export function HomeAdmin() {
    const { dishImage, dessertImage, drinkImage } = useAuth();

    
    const [dishData, setDishData] = useState([]);
    const [dessertData, setDessertData] = useState([]);
    const [drinkData, setDrinkData] = useState([]);

    const carouselRef = useRef([]);
    
    function scrollLeft(index, e) {
        e.preventDefault();

        if(carouselRef.current[index]) {
            carouselRef.current[index].scrollBy({
                left: -250,
                behavior: "smooth",
            })
        };
    };

    function scrollRight(index, e) {
        e.preventDefault();

        if(carouselRef.current[index]) {
            carouselRef.current[index].scrollBy({
                left: 250,
                behavior: "smooth",
            })
        };
    };

    
    useEffect(() => {
        async function fetchDishData() {
            try {
                const response = await api.get(`/dish`);
                const dishWithImages = response.data.map((item, index) => ({
                    ...item,
                    image: dishImage[index]
                }));
                setDishData(dishWithImages);
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
                const dessertWithImages = response.data.map((item, index) => ({
                    ...item,
                    image: dessertImage[index],
                }))
                setDessertData(dessertWithImages);
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

    useEffect(() => {
        async function fetchDrinkData() {
            try {
                const response = await api.get('/drink');
                const drinkWithImages = response.data.map((item, index) => ({
                    ...item,
                    image: drinkImage[index]
                }));
                setDrinkData(drinkWithImages);

            } catch (error) {
                if(error.message) {
                    showToasts.error(error.response.data.message);
                } else {
                    console.error(error);
                }
            }
        };

        fetchDrinkData();
    }, []);

    return (
        <Container>
            <Header 
                toAdmin
            >
                <button 
                    type="button"
                    className="mobile-menu"
                >
                    <LuMenu />
                </button>
            </Header>

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
                    <Carousel>
                        <a href="" onClick={e => scrollRight(0, e)}><LuChevronRight /></a>
                            <Meals ref={el => carouselRef.current[0] = el}>
                                {
                                    dishData && dishData.map((item) => (
                                        <Meal 
                                            key={String(item.id)}
                                            data={item}
                                            image={item.image}
                                            toAdmin 
                                        />
                                    ))
                                }
                            </Meals>
                        <a href="" onClick={e => scrollLeft(0, e)}><LuChevronLeft /></a>
                    </Carousel>
                    
                    <h2>Sobremesas</h2>
                    <Carousel>
                        <a href="#" onClick={e => scrollRight(1, e)}><LuChevronRight /></a>
                            <Meals ref={el => carouselRef.current[1] = el}>
                                {
                                    dessertData && dessertData.map((item) => (
                                        <Meal 
                                            key={String(item.id)}
                                            data={item}
                                            image={item.image}
                                            toAdmin
                                        />
                                    ))
                                }
                            </Meals>
                        <a href="#"><LuChevronLeft onClick={e => scrollLeft(1, e)}/></a>
                    </Carousel>
                    
                    <h2>Bebidas</h2>
                    <Carousel>
                        <a href="#" onClick={e => scrollRight(2, e)}><LuChevronRight /></a>
                            <Meals ref={el => carouselRef.current[2] = el}>
                                {
                                    drinkData && drinkData.map((item) => (
                                        <Meal 
                                            key={String(item.id)}
                                            data={item}
                                            image={item.image}
                                            toAdmin
                                        />
                                    ))
                                }
                            </Meals>
                        <a href="#"><LuChevronLeft onClick={e => scrollLeft(2, e)}/></a>

                    </Carousel>

                </Wrapper>
                
                <Footer />
            </main>
        </Container>
    )
}