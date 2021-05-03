import * as React from 'react';
import { PageTitle } from '../../components/pageTitle/pageTitle';
import { post } from '../../server';

export class Login extends React.Component {
    onClick = async () => {
        const response = await post('/users/signin', {
            username: this.state.login,
            password: this.state.password
        });
        const res = await response.json();
        const accessToken = localStorage.setItem('accessToken', res.accessToken);
        window.location.pathname = '/';
    }

    state = {
        login: '',
        password: '',
    }

    render() {
        return (
            <div className="container">
                <PageTitle title="Авторизация" />
                <div className="row">
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s6">
                                <input value={this.state.login} onChange={(e) => this.setState({login: e.target.value})} id="login" type="text" className="validate" />
                                <label htmlFor="login">Логин</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s6">
                                <input value={this.state.password} onChange={(e) => this.setState({password: e.target.value})} id="password" type="text" className="validate" />
                                <label htmlFor="password">Пароль</label>
                            </div>
                        </div>
                        <button onClick={this.onClick} className="btn waves-effect waves-light" type="button" name="action">Войти</button>
                    </form>
                </div>
            </div>
        );
    }
}
