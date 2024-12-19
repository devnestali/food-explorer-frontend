import { Container, InputSearch } from "./styles";

import { LuSearch } from "react-icons/lu";
import { LuClipboardList } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";

import { ButtonToOrder } from "../ButtonToOrder";
import { ButtonText } from "../ButtonText";

import { useNavigate } from "react-router-dom";
import { useAuth } from '../../hooks/auth';


export function Header({ toAdmin }) {
    const navigate = useNavigate();
    const { signOut } = useAuth();

    function handleClickToAddAdmin() {
        navigate("/add")
    };

    function handleSignOut() {
        signOut();
    };
    
    
    return (
        <Container>
            <div className="logo">
                <img src="/logo.svg" alt="logo" />
                <div className="text-container">
                    <a>food explorer</a>
                    {toAdmin && <p>admin</p>}
                </div>
            </div>

            <InputSearch>
                <LuSearch />
                <input type="text" placeholder="Busque por pratos ou ingredientes"/>
            </InputSearch>

            <ButtonToOrder icon={!toAdmin && LuClipboardList} 
                           title={toAdmin ? "Novo Prato" : "Pedidos (0)"} 
                           onClick={toAdmin ? handleClickToAddAdmin : ""}
            />
            <ButtonText icon={LuLogOut} toBack onClick={handleSignOut} />
        </Container>
    )
}