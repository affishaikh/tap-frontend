import React from "react";
import './OtpValidation.css'

class OtpValidation extends React.Component {
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
            this.props.onOtpValidationComplete(response.ok)
        }).catch(console.error)
    }

    render() {
        return (
            <div className="validation-component">
                <h1>OTP has been sent to your Email</h1>
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

export default OtpValidation