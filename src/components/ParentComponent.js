import React, { Component } from 'react'
import Form from './Form'
import DisplayData from './DisplayData'

export class ParentComponent extends Component {
 state = {
        firstName: "",
        lastName: "",
    }

    //   handleFirstNameChange = event => {
    //     this.setState({
    //       firstName: event.target.value
    //     })
    //   }
    
    //   handleLastNameChange = event => {
    //     this.setState({
    //       lastName: event.target.value
    //     })
    //   }

    handleChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        })
      }


    
    //   handleSubmit = (event) => {
    //     event.preventDefault();
    //     let formData = { firstName: this.state.firstName, lastName: this.state.lastName}
    //     this.sendFormDataSomewhere(formData)
    
    //   }

    render() {
        return (
            <div>
            <Form
            formData={this.state}
            handleChange={this.handleChange}
        
          />
          <DisplayData formData={this.state} />
          </div>
        )
    }
}

export default ParentComponent
