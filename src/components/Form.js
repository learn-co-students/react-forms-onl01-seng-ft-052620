import React from 'react'
class Form extends React.Component{
    
    render(){
        return(
            <div>
                <form> 
                    {/* update first name*/}
                    <input 
                        type="text" 
                        onChange ={event => this.props.handleFirstNameChange(event)}
                        value={this.props.formData.firstName}
                    />

                    <input 
                        type="text"
                        onChange ={event=> this.props.handleLastNameChange(event)}
                        value={this.props.formData.lastName}
                    />
                    <input type="submit" />
                </form>
            </div>
        )
    }
}
export default Form