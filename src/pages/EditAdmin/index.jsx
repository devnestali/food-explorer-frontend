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

import { useNavigate, useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import { api } from "../../services/api";
import { showToasts } from "../../utils/toasts";

export function EditAdmin() {
    const [data, setData] = useState(null);
    
    const [title, setTitle] = useState(data?.title);
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState();
    
    const [ingredients, setIngredients] = useState([]);
    const [newIngredient, setNewIngredient] = useState("");
    
    const { path, id } = useParams();
    const [selectedCategory, setSelectedCategory] = useState(path);
    
    const navigate = useNavigate();

    const options = [
        { id: 0, label: "Refeição", value: "dish"},
        { id: 1, label: "Sobremesa", value: "dessert"},
        { id: 2, label: "Bebida", value: "drink"},
    ];


    function inputChecker() {
        if (!title) {
            showToasts.error("Preencha o nome do prato");
            return false;
        };

        if(selectedCategory !== path) {
            showToasts.error("A categoria do prato não pode ser alterada");
            return false;
        };

        if(!description) {
            showToasts.error("Preencha a descrição");
            return false;
        };

        if(!price) {
            showToasts.error("Preencha o preço ");
            return false;
        };

        if(newIngredient) {
            showToasts.error("Um marcador foi preenchido, mas não foi adicionado. Adicione-o, ou deixe o campo vazio.");
            return false;
        };

        return true;
    };

    function handleAddTag() {
        setIngredients([...ingredients, newIngredient]);
        setNewIngredient("");
    };

    function handleRemoveTag(deletedIngredient) {
        const filteredIngredients = ingredients.filter(ingredient => ingredient !== deletedIngredient )

        setIngredients(filteredIngredients);
    };

    async function fetchDishData() {
        try {
            const { data } = await api.get(`/dish/${id}`);
            setData(data);
            
            setTitle(data.title);
            setDescription(data.description);
            setPrice(data.price);
            setIngredients([...data.ingredients]);
            
        } catch (error) {
            if(error.message) {
                showToasts.error(error.response.data.message);
            }
        }
    };

    async function fetchDessertData() {
        try {
            const { data } = await api.get(`/dessert/${id}`);
            setData(data);
            
            setTitle(data.title);
            setDescription(data.description);
            setPrice(data.price);
            setIngredients([...data.ingredients]);
            
        } catch (error) {
            if(error.message) {
                showToasts.error(error.response.data.message);
            }
        }
    };

    async function fetchDrinkData() {
        try {
            const { data } = await api.get(`/drink/${id}`);
            setData(data);
            
            setTitle(data.title);
            setDescription(data.description);
            setPrice(data.price);
            setIngredients([...data.ingredients]);
            
        } catch (error) {
            if(error.message) {
                showToasts.error(error.response.data.message);
            }
        }
    };

    async function handleSave() {
        const passedChecker = inputChecker();

        if(passedChecker) {
            try {
                api.put(`/${selectedCategory}/${id}`, {
                    newTitle: title,
                    newDescription: description,
                    newPrice: price,
                    newIngredients: ingredients,
                });
                
                showToasts.success("Prato atualizado com sucesso!");                
                navigate("/");
            } catch (error) {
                if(error.message) {
                    showToasts.error(error.response.data.message);
                } else {
                    showToasts.error("Não foi possível atualizar o prato");
                    console.error(error);
                }
            }
        };
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
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                            
                            <FieldTypeInput>
                                <label htmlFor="typeOfMeal">Categoria</label>
                                <LuChevronDown />
                                <select id="typeOfMeal" defaultValue={path} onChange={e => setSelectedCategory(e.target.value)}>
                                    {
                                        options.map(option => (
                                            <option 
                                                key={option.id}
                                                value={option.value}
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
                                        ingredients && ingredients.map((tag, i) => (
                                            <IngredientItem
                                                key={i}
                                                value={tag}
                                                onClick={() => handleRemoveTag(tag)}
                                            />
                                        ))
                                    }
                                    <IngredientItem 
                                        placeholder="Adicionar" 
                                        isNew 
                                        value={newIngredient}
                                        onChange={e => setNewIngredient(e.target.value)}
                                        onClick={handleAddTag}
                                    />
                                </div>
                            </div>
    
                            <Input 
                                title="Preço" 
                                placeholder="R$ 00,00" 
                                toAdmin
                                value={price ? `R$ ${price}` : ""}
                                onChange={e => {
                                    const value = e.target.value.replace(/[^\d,]/g, '');
                                    
                                    setPrice(value);
                                }}
                            />
                        </BodyInputs>
                        
                        <Textarea 
                            placeholder="A Salada César é uma opção refrescante para o verão."
                            value={description} 
                            onChange={e => setDescription(e.target.value)}
                        />

                        <div className="buttons">
                            <Button title="Excluir prato" toDelete />
                            <Button 
                                title="Salvar alterações" 
                                toEdit 
                                onClick={handleSave}
                            />
                        </div>
                    </Form>
                </Wrapper>
            <Footer />
            </main>

        </Container>
    )
}