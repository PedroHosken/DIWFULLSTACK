export default function (state = 0, action) {
    switch (action.type) {
        case 'SOMAR':
            return action.payload[0] + action.payload[1];
            break;
        case 'SUBTRAIR':
            return action.payload[0] - action.payload[1];
            break;
        default:
            return state;
            break;
    }
}