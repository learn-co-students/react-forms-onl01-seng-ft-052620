import React from 'react';
import Form from './Form'
import DisplayData from './DisplayData'
//ParentComponent will handle all of the functions while Form handles the display of the JSX
class ParentComponent extends React.Component{
    state = {
        firstName: "", 
        lastName: "",
    }

    handleFirstNameChange = event => {
        this.setState({
            firstName: event.target.value
        })
    }  

    handleLastNameChange = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    
    render(){
        return (
            <div>
                <Form 
                    formData={this.state}
                    handleFirstNameChange={this.handleFirstNameChange}
                    handleLastNameChange={this.handleLastNameChange}
                />
    
                <DisplayData 
                    formData={this.state}
                />
            </div>
        )
    }
}
export default ParentComponent;