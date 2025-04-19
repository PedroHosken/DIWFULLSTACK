export function somar(a,b){
    return{
        type: 'SOMAR',
        payload:[a,b]
    }
}

export function subtrair(a,b){
    return{
        type: 'SUBTRAIR',
        payload:[a,b]
    }
}