import React, {Component} from 'react';
import Todo from './todo';
import '../App.css';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            user:"",
            password:""
        }
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })


    }

    render() {
        const { handleSubmit ,isAuth , logout} = this.props;
        if (isAuth) {
            return (
                <Todo logout={logout}/>
            )
        }

        return (
            <div className={'login'}>
                <h2>LOGIN</h2>
                <form onSubmit={event => handleSubmit(event, this.state)}>
                    <input type={'text'} onChange={this.handleChange} placeholder={'User Name'} name={'user'} required className={"text-field"}/>
                    <input type={'password'} onChange={this.handleChange} placeholder={'Password'} name={'password'} required className={"text-field"}/>
                    <input type={'submit'} value={'Login'} className={'form-btn'}/>

                </form>
            </div>
        );
    }
}