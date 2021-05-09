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

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken && window.location.pathname !== `/${loginUri}`) {
      window.location.pathname = `/${loginUri}`;
    }

    this.state = {
      accessToken,
    }
  }

  render() {
    return (
      <>
        <Router>
          <div style={{paddingBottom: '120px'}} className="wrapper">
            <Header />
            <div className="body">
              <Switch>
                <Route>

                  <LoginIndex />
                  <RecordIndex />
                  <StaffIndex />
                  <ServiceIndex />
                  <ClientIndex />
                  <AboutIndex />

                </Route>
              </Switch>
            </div>
          </div>
        </Router>
      </>
    );
  }
}

export default App;
