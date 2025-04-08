// Import de React
import React from "react";

// função aleatória
export default function NumAleatorio(props) {
    const { min, max } = props;
    const aleatorio = parseInt(Math.random() * (max - min) + min);
    return (
        <div>
            <h4> Numero Aleatório </h4>
            <p> min = {min} </p>
            <p> max  = {max} </p>
            <p> gerado = {aleatorio} </p>
        </div>
    )
}