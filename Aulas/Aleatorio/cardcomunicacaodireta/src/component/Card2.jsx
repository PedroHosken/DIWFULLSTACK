// Importações
import React from "react";
import '/Users/USER/Documents/GitHub/DIWFULLSTACK/Aulas/Aleatorio/cardcomunicacaodireta/src/view/Card.css'

// função aleatória
export default function Card2(props) {
    return (
        <div className="Card2">
            <h1 className="TC2"> Herança </h1>
            <div className="Filho">{props.children}</div>
        </div>
    )
}