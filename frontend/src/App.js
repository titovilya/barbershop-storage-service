import * as React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";

import { PageRead } from './layouts/read/read';
import { PageEdit } from './layouts/edit/edit';
import { PageCreate } from './layouts/create/create';
import { PagePreview } from './layouts/preview/preview';

import { Header } from './components/header/header';
import { RouteContainer } from './components/routeContainer/routeContainer'

import { Login } from './pages/login/login';
import { About } from './pages/about/about';

import * as Staff from './pages/staff/constants';

import './App.css';
import { RecordCreate } from './pages/record/record.create';

class App extends React.Component {
  constructor(props) {
    super(props);

    const accessToken = localStorage.getItem('accessToken');
     if (!accessToken && window.location.pathname !== '/signin') {
       window.location.pathname = '/signin';
     }

    this.state = {
      accessToken,
    }
  }

  render() {
    return (
      <>
        {
          this.state.accessToken ? (
            <Router>
              <div className="wrapper">
                <Header />
                <div className="body">
                  <Switch>

                    <Route exact path={`/${Staff.uri}/read/:id`}>
                      <RouteContainer
                        component={PageRead}
                        componentProps={{
                          pageTitle: 'Просмотр сотрудника',
                          uri: Staff.uri,
                          formScheme: Staff.formScheme,
                        }}
                      />
                    </Route>
                    <Route exact path={`/${Staff.uri}/edit/:id`}>
                      <RouteContainer
                        component={PageEdit}
                        componentProps={{
                          pageTitle: 'Редактирование сотрудника',
                          uri: Staff.uri,
                          formScheme: Staff.formScheme,
                        }}
                      />
                    </Route>
                    <Route exact path={`/${Staff.uri}/create`}>
                      <PageCreate
                        pageTitle='Добавление сотрудника'
                        uri={Staff.uri}
                        formScheme={Staff.formScheme}
                      />
                    </Route>
                    <Route exact path={`/${Staff.uri}`}>
                      <PagePreview
                        pageTitle='Сотрудники'
                        buttonName='Добавить сотрудника'
                        uri={Staff.uri}
                        tableColumns={Staff.tableColumns}
                      />
                    </Route>

                    <Route exact path={`/record/create`}>
                      <RecordCreate />
                    </Route>

                    <Route exact path={`/about`}>
                      <About />
                    </Route>

                  </Switch>
                </div>
              </div>
            </Router>
          ) : (
              <Login />
            )
        }
      </>
    );
  }
}

export default App;
