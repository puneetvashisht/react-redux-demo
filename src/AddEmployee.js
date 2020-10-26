import React, { Component } from 'react'
import { connect } from 'react-redux';
import * as actionCreators from './actions/actions';

class AddEmployee extends Component {
    constructor() {
        super()
    
        this.name = React.createRef();
        this.salary = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        console.log('A name was submitted: ' + this.name.current.value);
        console.log('A name was submitted: ' + this.salary.current.value);
        this.props.onAddEmployee({ name:  this.name.current.value, salary:this.salary.current.value })
        event.preventDefault();
      }


    render() {

        return (
            <React.Fragment>
            
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Name</span>
                    </div>
                    <input type="text"  ref={this.name}  className="form-control" placeholder="Enter Employee Name" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Salary</span>
                    </div>
                    <input type="number"  ref={this.salary}  className="form-control" placeholder="Enter Employee Salary" aria-label="Username" aria-describedby="basic-addon1" />
                </div>

                <button className="btn btn-primary" type="button" onClick={this.handleSubmit}>Add Employee</button>
             
            </React.Fragment>

        );
    }
}

// export default AddEmployee;

const mapStateToProps = state => {
    return {
        employees: state.employees
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddEmployee: (payload) => dispatch(actionCreators.addEmployee(payload))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddEmployee);