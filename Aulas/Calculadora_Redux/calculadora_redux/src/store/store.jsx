import { combineReducers } from "redux";
import CalculadoraRedux from "./calculadora/Calculadora.redux";

export default combineReducers(
    {
        calculadora: CalculadoraRedux
    }
)