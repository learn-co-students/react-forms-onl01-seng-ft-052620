import React, { Component } from 'react'

export class DisplayData extends Component {
    render() {
        return (
            <div>
        <h1>{this.props.formData.firstName}</h1>
        <h1>{this.props.formData.lastName}</h1>
            </div>
        )
    }
}

export default DisplayData
