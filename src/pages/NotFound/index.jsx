import { motion } from "motion/react";

import { Container } from "./styles";

import { ButtonText } from "../../components/ButtonText";

import { LuArrowLeft } from "react-icons/lu";


export function NotFound() {
    return (
        <Container>
            <motion.div
                className="notFound"
                initial={{ opacity: 0, scale: 0.5}}
                animate={{ opacity: 1, scale: 1}}
                transition={{ 
                    duration: 0.8,
                    delay: 0.5,
                    ease: [0, 0.71, 0.2, 1.01]
                }}
            >
                <h1><span>401</span> página não encontrada :(</h1>
                <ButtonText title="Retornar para página principal" icon={LuArrowLeft}/>
            </motion.div>
        </Container>
    )
}