import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actionCreators from './actions/actions'; 
class ViewEmployees extends Component {
    constructor() {
        super()
        // this.state = {
        //     employees: [
        //         { Id: 101, Name: 'Abhinav', Location: 'Bangalore', Salary: 12345 },
        //         { Id: 102, Name: 'Abhishek', Location: 'Chennai', Salary: 23456 },
        //         { Id: 103, Name: 'Ajay', Location: 'Bangalore', Salary: 34567 }
        //     ]
        // }
    }


    componentDidMount(){
        this.props.onFetchEmployee();
    }
    render() {


        var employeeList = this.props.employees.map(function (employee, i) {
            console.log(employee);
            return (
                <tr key={i}>
                    <th scope="row">{i + 1}</th>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.salary}</td>
                </tr>
            );
        })

        return (

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Salary</th>
                    </tr>
                </thead>
                <tbody>

                    {employeeList}
                </tbody>
            </table>


        );
    }
}

// export default ViewEmployees;

const mapStateToProps = state => {
    return {
        employees: state.employees
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchEmployee: () => dispatch(actionCreators.fetchEmployees())
        // onIncrementCounter: () => dispatch({type: 'INCREMENT'})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewEmployees);