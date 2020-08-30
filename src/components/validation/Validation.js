import React from "react";
import './Validation.css'

class Validation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            otp: ""
        }

        this.onSubmit = this.onSubmit.bind(this)
        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange(event) {
        this.setState({
            otp: event.target.value
        })
    }

    onSubmit() {
        const email = localStorage.getItem("email")
        fetch('/validate-otp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ otp: +this.state.otp, email })
        }).then(response => {
            return response.json()
        })
    }

    render() {
        return (
            <div className="validation-component">
                <h1>Enter OTP!</h1>
                <input className="text"
                       name="otp"
                       type="text"
                       value={this.state.otp}
                       onChange={this.handleInputChange} placeholder="OTP"/>
                <input className="button"
                       type="button"
                       value="Submit"
                       onClick={this.onSubmit}
                />
            </div>
        );
    }
}

export default Validation