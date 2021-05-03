import * as React from 'react';
import { PageTitle } from '../../components/pageTitle/pageTitle';
import { Link } from "react-router-dom";
import MaterialTable from 'material-table';
import { del, get } from '../../server';

/* PROPS
pageTitle
buttonName
tableColumns
uri
*/

export class PagePreview extends React.Component {
    async componentDidMount() {
        const items = await get(`/${this.props.uri}`);
        console.log(items)
        this.setState({items: [
                {
                    email: "superadmin@gmail.com",
                    id: "862835dc-e936-4481-aed6-ed709045bf28",
                    name: "Ilya",
                    password: "$2a$12$R.tRV/g85rJwY3ABsxOUo.T2uZBwD/dTCS.BStmzM9.6iy.ObR8za",
                    phone: {

                    },
                    username: "owner",
                }
            ]});
    }

    state = {
        items: []
    }

    onDeleteItem = async (id) => {
        const newState = [];

        for (let i = 0; i < this.state.items.length; i++) {
            if (this.state.items[i].id !== id) {
                newState.push(this.state.items[i]);
            }
        }

        this.setState({
            items: newState
        });

        await del(`/${this.props.uri}/delete/${id}`);
    }

    render() {
        return (
            <div className="container">
                <PageTitle title={this.props.pageTitle}>
                    <Link className="btn btn-primary" to={`/${this.props.uri}/create`}>{this.props.buttonName}</Link>
                </PageTitle>
                <div className="table_main" style={{ maxWidth: '100%' }}>
                    <MaterialTable columns={this.props.tableColumns} data={this.state.items.map(item => ({
                        ...item,
                        read: [
                            <td><Link className="btn btn-primary" to={`/${this.props.uri}/read/${item.id}`}>Просмотр</Link></td>
                        ],
                        edit: [
                            <td><Link className="btn btn-primary" to={`/${this.props.uri}/edit/${item.id}`}>Редактировать</Link></td>
                        ],
                        delete: [
                            <td><button onClick={() => this.onDeleteItem(item.id)} type="button" className="btn btn-danger">Удалить</button></td>
                        ]
                    }))} title='' />
                </div>
            </div>
        );
    }
}
