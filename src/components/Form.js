import React from 'react';

class Form extends React.Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" name="firstName" onChange={event => this.props.handleFirstNameChange(event)}/>
          <input type="text" name="lastName" onChange={event => this.props.handleLastNameChange(event)}/>
        </form>
      </div>
    )
  }
}

export default Form;