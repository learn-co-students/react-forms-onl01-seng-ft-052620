import React from 'react';

class Form extends React.Component {
  state = {
    firstName: "John",
    lastName: "Henry",
    submittedData: []
  }

  handleFirstNameChange = event => {
    this.setState({
      firstName: event.target.value
    })
  }

  handleLastNameChange = event => {
    this.setState({
      lastName: event.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault()
    let formData = {firstName: this.state.firstName, lastName: this.state.lastName}
    let dataArray = this.state.submittedData.concat(formData)
    this.setState({submittedData: dataArray, firstName: "", lastName: ""})
  }

  listOfSubmissions = () => {
    return this.state.submittedData.map( (data,i) => {
      return <div key={i}><span>{data.firstName}</span> <span>{ data.lastName }</span></div>
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
          <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
          <input type="submit"/>
        </form>
        {this.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;