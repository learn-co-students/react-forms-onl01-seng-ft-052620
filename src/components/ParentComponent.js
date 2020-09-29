import React from 'react'
import DisplayData from './DisplayData'
import Form from './Form'

class ParentComponent extends React.Component {
    state = {
        firstName: " ",
        lastName: " ",
        submittedData: []
    }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault()
        let formData = { firstName: this.state.firstName, lastName: this.state.lastName}
        let dataArray = this.state.submittedData.concat(formData)
        this.setState({submittedData: dataArray})
      }

    render() {
        return(
            <div>
            <Form 
                formData={this.state}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
            />
            <DisplayData formData={this.state} />
            </div>
        )
    }
}

export default ParentComponent