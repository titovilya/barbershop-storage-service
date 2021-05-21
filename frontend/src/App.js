import * as React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
} from "react-router-dom";

import { Header } from './components/header/header';

import { LoginIndex, uri as loginUri } from './pages/login/index';
import { StaffIndex } from './pages/staff/index';
import { ServiceIndex } from './pages/service/index';
import { ClientIndex } from './pages/client/index';
import { RecordIndex } from './pages/record/index';
import { AboutIndex } from './pages/about';

import { validateTocken } from './server/simple';

import './App.css';


class App extends React.Component {
    state = {
        accessToken: null,
        isAuth: false,
    };

    async componentDidMount() {
        let isAuth = await validateTocken();

        const accessToken = localStorage.getItem('accessToken');
        if (window.location.pathname !== `/${loginUri}` && !isAuth) {
            window.location.pathname = `/${loginUri}`;
        }

        if (window.location.pathname === `/${loginUri}` && isAuth) {
            window.location.pathname = `/`;
        }

        this.setState({
            accessToken,
            isAuth,
        });
    }

    render() {
        return (
            <>
                <Router>
                    <Switch>

                        <div style={{ paddingBottom: '120px' }} className="wrapper">
                            {
                                this.state.isAuth ? (
                                    <Route>
                                        <Header />
                                        <div className="body">
                                            <Switch>
                                                <Route>

                                                    <RecordIndex />
                                                    <StaffIndex />
                                                    <ServiceIndex />
                                                    <ClientIndex />
                                                    <AboutIndex />

                                                </Route>
                                            </Switch>
                                        </div>
                                    </Route>
                                ) : <Route><LoginIndex /></Route>
                            }
                        </div>

                    </Switch>
                </Router>
            </>
        );
    }
}

export default App;
