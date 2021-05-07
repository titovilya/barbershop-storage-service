import * as React from 'react';
import {
    Route,
    Switch,
} from "react-router-dom";
import { RouteContainer } from '../../components/routeContainer/routeContainer'
import { PageEdit } from '../../layouts/edit/edit';
import { PageCreate } from '../../layouts/create/create';
import { PagePreview } from '../../layouts/preview/preview';

export const scheme = [
    { label: 'Имя', name: 'name' },
    { label: 'Телефон', name: 'phone' },
    { label: 'Должность', name: 'position' },
    { label: 'E-mail', name: 'email' }
]

export const uri = 'staff';

export class StaffIndex extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path={`/${uri}`}>
                    <PagePreview
                        pageTitle='Сотрудники'
                        buttonName='Добавить сотрудника'
                        uri={uri}
                        tableColumns={scheme}
                    />
                </Route>
                <Route exact path={`/${uri}/edit/:id`}>
                    <RouteContainer
                        component={PageEdit}
                        componentProps={{
                            pageTitle: 'Редактирование сотрудника',
                            uri: uri,
                            formScheme: scheme,
                        }}
                    />
                </Route>
                <Route exact path={`/${uri}/create`}>
                    <PageCreate
                        pageTitle='Добавление сотрудника'
                        uri={uri}
                        formScheme={scheme}
                    />
                </Route>
            </Switch>
        );
    }
}
