import React, { Component } from 'react';

class ViewEmployees extends Component {
    constructor() {
        super()
        this.state = {
            employees: [
                { id: 101, name: 'Abhinav', salary: 12345 },
                { id: 102, name: 'Abhishek', salary: 23456 },
                { id: 103, name: 'Ajay', salary: 34567 }
            ]
        }
    }


  
    render() {


        var employeeList = this.state.employees.map(function (employee, i) {
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

            <table className="table">
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

export default ViewEmployees;
