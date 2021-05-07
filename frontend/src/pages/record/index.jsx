import * as React from 'react';
import {
    Route,
    Switch,
} from "react-router-dom";

import { Record } from './record';
import { RecordCreate } from './record.create';

export const scheme = [
    { label: 'Клиент', name: 'client' },
    { label: 'Телефон клиента', name: 'clientPhone' },
    { label: 'Сотрудник', name: 'staff' },
    { label: 'Услуга', name: 'service' },
    { label: 'Цена', name: 'price' },
    { label: 'Дата/Время начала', name: 'dateFrom' },
    { label: 'Дата/Время конца', name: 'dateTo' },
];

export const uri = 'record';

export class RecordIndex extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path={`/${uri}/create`}>
                    <RecordCreate
                        uri={uri}
                    />
                </Route>
                <Route exact path={`/`}>
                    <Record
                        tableColumns={scheme}
                        uri={uri}
                    />
                </Route>
            </Switch>
        )
    }
}
