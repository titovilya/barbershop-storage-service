import * as React from 'react';
import {
    Route,
    Switch,
} from "react-router-dom";

import { TextInput } from 'react-materialize';
import { PageTitle } from '../../components/pageTitle/pageTitle';
import { domain } from './../../server/simple';

export const uri = 'signin'

export class LoginIndex extends React.Component {
    onClick = async () => {
        const response = await fetch(`${domain}/users/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: this.state.login,
                password: this.state.password
            })
        });
        const res = await response.json();

        if (res.accessToken) {
            const accessToken = localStorage.setItem('accessToken', res.accessToken);
            window.location.pathname = '/';
        }
    }

    state = {
        login: '',
        password: '',
    }

    render() {
        return (
            <Switch>
                <Route exact path={`/${uri}`}>
                    <div className="container">
                        <PageTitle title="Авторизация" />
                        <div className="row">
                            <form className="col s12">
                                <div className="row">
                                    <div className="input-field col s6">
                                        <TextInput
                                            label='Логин'
                                            value={this.state.login}
                                            onChange={(e) => this.setState({ login: e.target.value })}
                                            s={12}
                                        />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="input-field col s6">
                                        <TextInput
                                            label='Пароль'
                                            value={this.state.password}
                                            onChange={(e) => this.setState({ password: e.target.value })}
                                            s={12}
                                        />
                                    </div>
                                </div>
                                <button onClick={this.onClick} className="btn waves-effect waves-light" type="button" name="action">Войти</button>
                            </form>
                        </div>
                    </div>
                </Route>
            </Switch>
        );
    }
}
