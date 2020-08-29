import React from 'react'
import './Registration.css'

class RegistrationComponent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "",
            email: "",
            mobileNumber: "",
            class: ""
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        console.log()
        const name = event.target.name

        this.setState({
            [name]: event.target.value
        })
    }

    onSubmit() {
        fetch('/student/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ ...this.state })
        }).then(response => {
            console.log("Response is " + response.json())
        });
    }

    render() {
        return (
            <div className="registration-component">
                <input className="text" name="name" type="text" value={this.state.name} onChange={this.handleInputChange} placeholder="Name"/>
                <input className="text" name="email" type="text" value={this.state.email} onChange={this.handleInputChange} placeholder="Email"/>
                <input className="text" name="mobileNumber" type="text" value={this.state.mobileNumber} onChange={this.handleInputChange} placeholder="Mobile Number"/>
                <input className="text" name="class" type="text" value={this.state.class} onChange={this.handleInputChange} placeholder="Class"/>
                <input className="button"
                    type="button"
                    value="Submit"
                    onClick={this.onSubmit}
                />
            </div>
        );
    }
}

export default RegistrationComponent