const redux = require('redux');
const createStore = redux.createStore;

const reducer = function(state={
    id: 0
}, action){
    if(action.type === "INC"){
        var newState = Object.assign({}, state, {id: state.id+action.value});
        return newState;
    }
    if(action.type === "DEC"){
        var newState = Object.assign({}, state, {id: state.id - action.value});
        return newState;
    }
    return state;
}

const store = createStore(reducer);

store.subscribe(function(){
    console.log("Action fired...", store.getState())
});

store.dispatch({type: "INC", value: 10});
store.dispatch({type: "DEC", value: 1});