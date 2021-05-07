import * as React from 'react';
import { Link } from "react-router-dom";

import { uri as clientUri } from '../../pages/client/index';
import { uri as staffUri } from '../../pages/staff/index';
import { uri as serviceUri } from '../../pages/service/index';
import { uri as aboutUri } from '../../pages/about/index';

export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <nav>
                    <div className="nav-wrapper">
                        <div className="container">
                            <Link className="brand-logo" to="/">Админ панель</Link>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><Link to="/">Записи</Link></li>
                                <li><Link to={`/${staffUri}`}>Сотрудники</Link></li>
                                <li><Link to={`/${serviceUri}`}>Услуги</Link></li>
                                <li><Link to={`/${clientUri}`}>Клиенты</Link></li>
                                <li><Link to={`/${aboutUri}`}>Об авторе</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
