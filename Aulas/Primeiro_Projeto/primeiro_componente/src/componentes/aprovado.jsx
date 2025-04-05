// import do react
import React from "react";

// função de status
export default function Status(props) {
    // condicional com ternário
    const status = props.nota >= 6 ? "Aprovado" : "Desaprovado"
    // retorno
    return (
        <div>
            <p> Mestre Pedrão, me chamo {props.nome}</p>
            <p>Minha nota foi {props.nota}</p>
            <p>Eu fui {status}</p>
        </div>

    );
}