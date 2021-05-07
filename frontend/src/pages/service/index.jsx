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
    { name: 'name', label: 'Название услуги' },
    { name: 'price', label: 'Цена' },
];

export const uri = 'services';

export class ServiceIndex extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path={`/${uri}/edit/:id`}>
                    <RouteContainer
                        component={PageEdit}
                        componentProps={{
                            pageTitle: 'Редактирование услуги',
                            uri: uri,
                            formScheme: scheme,
                        }}
                    />
                </Route>
                <Route exact path={`/${uri}/create`}>
                    <PageCreate
                        pageTitle='Добавление услуги'
                        uri={uri}
                        formScheme={scheme}
                    />
                </Route>
                <Route exact path={`/${uri}`}>
                    <PagePreview
                        pageTitle='Услуги'
                        buttonName='Добавить услугу'
                        uri={uri}
                        tableColumns={scheme}
                    />
                </Route>
            </Switch>
        )
    }
}
