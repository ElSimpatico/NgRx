import * as ContadorActions from './contador.actions';

export function contadorReducer(state: number = 10, action: ContadorActions.actions) {

    switch (action.type) {
        case ContadorActions.INCREMENTAR:
            return state + 1;
        case ContadorActions.DECREMENTAR:
            return state - 1;
        case ContadorActions.MULTIPLICAR:
            return state * action.payload;
        case ContadorActions.DIVIDIR:
            return state / action.payload;
        case ContadorActions.RESET:
            return 0;
        default:
            return state;
    }
}
