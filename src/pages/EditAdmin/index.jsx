import { Container, Form, FieldImageInput, HeaderInputs, FieldTypeInput, BodyInputs } from "./styles";

import { Header } from "../../components/Header";
import { Wrapper } from "../../components/Wrapper";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";
import { IngredientItem } from "../../components/IngredientItem";
import { Textarea } from "../../components/Textarea";

import { LuArrowLeft, LuArrowUpFromLine, LuChevronDown } from "react-icons/lu";

import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import { api } from "../../services/api";

export function EditAdmin() {
    const [data, setData] = useState(null);

    const { path, id } = useParams();

    const options = [
        { id: 0, label: "Refeição", value: "dish"},
        { id: 1, label: "Sobremesa", value: "dessert"},
        { id: 2, label: "Bebida", value: "drink"},
    ];

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
            <Header toAdmin/>

            <main>
                <Wrapper>
                    <ButtonText icon={LuArrowLeft} title="voltar" toBack />
                    <h2>Editar prato</h2>
                    <Form>
                        <HeaderInputs>
                            <FieldImageInput>
                                <p className="inputImage">Imagem do prato</p>
                                <div className="dishImageInput">
                                    <label htmlFor="inputImage">
                                        <input type="file" id="inputImage" accept="image/*" />
                                        <div className="text-container">
                                            <LuArrowUpFromLine /> Selecionar imagem
                                        </div>
                                    </label>
                                </div>
                            </FieldImageInput>
                            
                            <Input 
                                title="Nome" 
                                placeholder="Salada Ceasar" 
                                toAdmin
                                value={data?.title} 
                            />
                            
                            <FieldTypeInput>
                                <label htmlFor="typeOfMeal">Categoria</label>
                                <LuChevronDown />
                                <select id="typeOfMeal">
                                    {
                                        options.map(option => (
                                            <option 
                                                key={option.id}
                                                value={option.value}
                                                selected={path === option.value}
                                            >
                                                {option.label}
                                            </option>
                                        ))
                                    }
                                </select>
                            </FieldTypeInput>
                        </HeaderInputs>

                        <BodyInputs>
                            <div className="containerBody">
                                <label htmlFor="ingredients">Ingredientes</label>
                                <div className="ingredients">
                                    {
                                        data?.ingredients && data?.ingredients.map((tag, i) => (
                                            <IngredientItem
                                                key={i}
                                                value={tag}
                                            />
                                        ))
                                    }
                                    <IngredientItem placeholder="Adicionar" isNew />
                                </div>
                            </div>
    
                            <Input 
                                title="Preço" 
                                placeholder="R$ 00,00" 
                                toAdmin
                                value={data?.price} 
                            />
                        </BodyInputs>
                        
                        <Textarea 
                            placeholder="A Salada César é uma opção refrescante para o verão."
                            value={data?.description} 
                        />

                        <div className="buttons">
                            <Button title="Excluir prato" toDelete />
                            <Button title="Salvar alterações" disabled />
                        </div>
                    </Form>
                </Wrapper>
            <Footer />
            </main>

        </Container>
    )
}