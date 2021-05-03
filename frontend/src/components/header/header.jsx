import * as React from 'react';
import { Link } from "react-router-dom";

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
                                <li><Link to="/users">Сотрудники</Link></li>
                                <li><Link to="/services">Услуги</Link></li>
                                <li><Link to="/clients">Клиенты</Link></li>
                                <li><Link to="/about">Об авторе</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}
