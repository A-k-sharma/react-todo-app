import React, { Component } from 'react';
import Login from './components/login';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            user:"admin",
            password:"admin",
            isAuth: false
        }
    }
    handleSubmit = (event, item) => {
        event.preventDefault();
        const { user, password } = this.state;
        if (item.user === user && item.password === password) {
            this.setState({
                isAuth: true
            });
        } else {
            this.setState({
                isAuth: false
            });
        }
    };

    logout=()=>{
        this.setState({
            isAuth: false
        })
    }
    render() {
        return (
            <div className="App">
                <Login handleSubmit={this.handleSubmit} isAuth={this.state.isAuth} logout={this.logout}/>
            </div>
        );
    }
}

export default App;