export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const FETCH_EMPLOYEES = 'FETCH_EMPLOYEES';

const baseUrl = 'http://localhost:3000/employees'

export const saveEmployee = (payload) => {
    return {
        type: ADD_EMPLOYEE,
        payload
    }
};

export const addEmployee = (payload) => {

    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
    };


    return dispatch => {
        fetch(baseUrl, requestOptions)
            .then(response => response.json())
            .then(data => dispatch(saveEmployee(data)));
        // setTimeout(()=>{
        //     dispatch(saveEmployee(payload))
        // }, 5000)
    }
};



export const findEmployee = (payload) => {
    console.log(payload)
    return {
        type: FETCH_EMPLOYEES,
        payload
    };
};

export const fetchEmployees = () => {
    return dispatch => {
        fetch(baseUrl)
            .then(response => response.json())
            .then(data => dispatch(findEmployee(data)));
    }

};

