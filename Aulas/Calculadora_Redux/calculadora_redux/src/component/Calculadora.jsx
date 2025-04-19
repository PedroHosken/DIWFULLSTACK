import React from "react";
import { connect, useDispatch } from 'react-redux';
import { subtrair } from "../store/calculadora/Calculadora.action";

function Calculadora({ result }) {
    const dispatch = useDispatch();

    return (
        <div>
            <div><p>Chamada 1</p></div>
            <button onClick={() => {
                dispatch({
                    type: 'SOMAR',
                    payload: [1, 3]
                })
            }}> Somar </button>

            <div><p>Chamada 2</p></div>
            <button onClick={() => {
                dispatch(subtrair(10, 7))
            }}> Subtrair </button>

            <div>{result}</div>
        </div>
    )
}


function mapStateToProps(state){
    return{
        result: state.calculadora
    }

}

export default connect(mapStateToProps) (Calculadora)