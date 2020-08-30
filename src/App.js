import React from 'react';
import Registration from "./components/registration/Registration";
import './App.css';
import OtpValidation from "./components/OtpValidation/OtpValidation";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isRegistrationComplete: false,
            isOtpValidationComplete: false,
            isValidUser: false
        }

        this.onRegistrationComplete = this.onRegistrationComplete.bind(this)
        this.onOtpValidationComplete = this.onOtpValidationComplete.bind(this)
    }

    onRegistrationComplete() {
        this.setState({isRegistrationComplete: true})
    }

    onOtpValidationComplete(isValidUser) {
        this.setState({
            isOtpValidationComplete: true,
            isValidUser: isValidUser
        })
    }

    render() {
        if (!this.state.isRegistrationComplete) {
            return (
                <div className="App">
                    <h1>Register for TAP</h1>
                    <Registration onRegistrationComplete={this.onRegistrationComplete}/>
                </div>
            );
        }

        if (this.state.isRegistrationComplete && !this.state.isOtpValidationComplete) {
            return (
                <div className="App">
                    <OtpValidation onOtpValidationComplete={this.onOtpValidationComplete.bind(this)}/>
                </div>
            );
        }

        if (this.state.isValidUser) {
            return (<div className="App">
                <h1>Your Registration is complete!!!</h1>
            </div>)
        }

        if (!this.state.isValidUser) {
            return (<div className="App">
                <h1>You have entered a wrong OTP</h1>
            </div>)
        }
    }
}

export default App;
