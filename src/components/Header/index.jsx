import { Container, InputSearch } from "./styles";

import { LuSearch } from "react-icons/lu";
import { LuClipboardList } from "react-icons/lu";
import { LuLogOut } from "react-icons/lu";

import { ButtonToOrder } from "../ButtonToOrder";
import { ButtonText } from "../ButtonText";


export function Header() {
    return (
        <Container>
            <div className="logo">
                <img src="/logo.svg" alt="logo" />
                <a>food explorer</a>
            </div>

            <InputSearch>
                <LuSearch />
                <input type="text" placeholder="Busque por pratos ou ingredientes"/>
            </InputSearch>

            <ButtonToOrder icon={LuClipboardList} title="Pedidos (0)"/>
            <ButtonText icon={LuLogOut} toBack />
        </Container>
    )
}