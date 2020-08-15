import counterContext from "./CounterContext"

const CounterReducer = (state, action) => {
switch (action)
{
    case 'INCREMENT':
        return state + 1;

     default: return state;
}

}

export default counterContext
