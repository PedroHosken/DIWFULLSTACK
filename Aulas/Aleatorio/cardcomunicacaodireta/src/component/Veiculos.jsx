// Importações
import React from "react";
import '/Users/USER/Documents/GitHub/DIWFULLSTACK/Aulas/Aleatorio/cardcomunicacaodireta/src/view/Card.css'

export default function Veiculos(props) {
    return (
        <div className="Carros">
            <h1> Sessão de Carros </h1>
            <div className="TipoCarro"> {props.children} </div>
        </div>
    )
}