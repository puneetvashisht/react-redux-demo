import * as actionTypes from '../actions/actions';

const initialState = {
    employees: [
        // { Id: 101, Name: 'Ravi', Location: 'Bangalore', Salary: 12345 },
        // { Id: 102, Name: 'Abhishek', Location: 'Chennai', Salary: 23456 },
        // { Id: 103, Name: 'Ajay', Location: 'Bangalore', Salary: 34567 }
    ]
}

const reducer = function(state = initialState, action)  {
    switch ( action.type ) {
        case actionTypes.ADD_EMPLOYEE:
            console.log('In reducer', action.payload)
            return {
                employees: [...state.employees, action.payload]
            }

        case actionTypes.FETCH_EMPLOYEES:
            console.log('In reducer', action.payload)
                return {
                    employees: [...action.payload]
                }
       
    }
    return state;
};

export default reducer;