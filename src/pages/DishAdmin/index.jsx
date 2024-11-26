import { Container, InfoMeal, DetailsMeal, Buttons } from "./styles";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { ButtonText } from "../../components/ButtonText";
import { Ingredient } from "../../components/Ingredient";
import { Button } from "../../components/Button";

import { LuChevronLeft, LuMinus, LuPlus } from "react-icons/lu";

import MealPhoto from "../../assets/mealphoto.svg";
import { useNavigate } from "react-router-dom";

export function DishAdmin() {
    const navigate = useNavigate()
    
    function handleClickToEdit() {
        navigate("/edit");
    }
    return (
        <Container>
            <Header toAdmin />

                <main>
                    <Wrapper>
                        <ButtonText icon={LuChevronLeft} title="voltar" toBack />
                        <InfoMeal>
                            <img src={MealPhoto} alt="meal" />

                            <DetailsMeal>
                                <h2>Salada Ravanello</h2>
                                <p>Rabanetes, folhas verdes e molho agridoce salpicado com gergelim. O pão naan dá um toque especial</p>

                                <div className="ingredients">
                                    <Ingredient name="alface" />
                                    <Ingredient name="cebola" />
                                    <Ingredient name="pao naan" />
                                    <Ingredient name="pepino" />
                                    <Ingredient name="rabanete" />
                                    <Ingredient name="tomate" />
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