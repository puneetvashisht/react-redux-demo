import {createStore} from 'redux';

// Reducer to control one section of the store
//Takes an initial state and action.
const reducer = (state=[], action) =>{
    if(action.type=="SPLIT_STRING"){
        return action.payload.split('')
    }
    else if(action.type=="ADD_CHAR"){
        //Never modify the existing state -> always return a new state
        return [...state, action.payload]
    }
    return state;
}
//Create one single store
var store = createStore(reducer)

console.log('Initial state', store.getState())
var action = {
    type: 'SPLIT_STRING',
    payload: 'abcd'
}
store.dispatch(action);
console.log('Current state after action dispatch', store.getState())

var action2 = {
    type: 'ADD_CHAR',
    payload: 'e'
}
store.dispatch(action2);
console.log('Current state after action dispatch', store.getState())
