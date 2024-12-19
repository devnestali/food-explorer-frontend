import { Container, MainHeader, Meals, Carousel } from "./styles";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { Meal } from "../../components/Meal";
import { Footer } from "../../components/Footer";

import { LuChevronLeft, LuChevronRight } from "react-icons/lu";

import mainImage from '../../assets/mainImage.png';
import { useRef } from "react";
export function Home() {
    const carouselRef = useRef([]);
    
    function scrollLeft (index, e) {
        e.preventDefault();
        
        if (carouselRef.current[index]) {
            carouselRef.current[index].scrollBy({
                left: -250,
                behavior: "smooth",
            });
        }
    };

    function scrollRight(index, e) {
        e.preventDefault();

        if (carouselRef.current[index]) {
            carouselRef.current[index].scrollBy({
                left: 250,
                behavior: "smooth",
            })
        };
    };

    return (
        <Container>
            <Header />

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
                            <Meal />
                            <Meal />
                            <Meal />
                            <Meal />
                            <Meal />
                        </Meals>
                        <a href="" onClick={e => scrollLeft(0, e)}><LuChevronLeft /></a>
                    </Carousel>
                    
                    <h2>Sobremesas</h2>
                    <Carousel>
                        <a href="" onClick={e => scrollRight(1, e)}><LuChevronRight /></a>
                        <Meals ref={el => carouselRef.current[1] = el}>
                            <Meal />
                            <Meal />
                            <Meal />
                            <Meal />
                            <Meal />
                        </Meals>
                        <a href="" onClick={e => scrollLeft(1, e)}><LuChevronLeft /></a>
                    </Carousel>
                    
                    <h2>Bebidas</h2>
                    <Carousel>
                        <a href="" onClick={e => scrollRight(2, e)}><LuChevronRight /></a>
                        <Meals ref={el => carouselRef.current[2] = el}>
                            <Meal />
                            <Meal />
                            <Meal />
                            <Meal />
                            <Meal />
                        </Meals>
                        <a href="" onClick={e => scrollLeft(2, e)}><LuChevronLeft /></a>
                    </Carousel>

                </Wrapper>
                
                <Footer />
            </main>
        </Container>
    )
}