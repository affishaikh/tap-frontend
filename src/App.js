import React from 'react';
import Registration from "./components/registration/Registration";
import './App.css';
import Validation from "./components/validation/Validation";

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isRegistrationComplete: false
        }

        this.onRegistrationComplete = this.onRegistrationComplete.bind(this)
    }

    onRegistrationComplete() {
        this.setState({isRegistrationComplete: true})
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

        if (this.state.isRegistrationComplete) {
            return (
                <div className="App">
                    <Validation/>
                </div>
            );
        }
    }
}

export default App;
