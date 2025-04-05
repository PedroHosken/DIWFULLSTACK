// Import
import React from "react";

// Uso de function - Mais usual
function Idcomparametro(props) {
    return (
        < div >
            <p> Meu nome é {props.nome} </p>
            <p> Mais conhecido como {props.vulgo} </p>
        </div >
    );
}

export default Idcomparametro;