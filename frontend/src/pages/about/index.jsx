import * as React from 'react';
import {
    Route,
    Switch,
} from "react-router-dom";

export const uri = 'about';

export class AboutIndex extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path={`/${uri}`}>
                    <div className="container">
                        <div className="row">
                            <div className="col s7">
                                <h5> Эта информационно-справочная система выполнена студентом второго курса Финансового университета<br />
                        Титовым Ильей ПИ19-1</h5>

                                <a className="waves-effect waves-light btn"
                                    href="https://github.com/titovilya/barbershop-storage-service">Гитхаб</a>
                            </div>
                        </div>
                    </div>
                </Route>
            </Switch>
        );
    }
}
