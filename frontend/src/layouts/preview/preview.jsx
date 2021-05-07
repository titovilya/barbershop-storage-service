import * as React from 'react';
import { PageTitle } from '../../components/pageTitle/pageTitle';
import { Link } from "react-router-dom";
import MUIDataTable from 'mui-datatables';
import { simpleServer } from './../../server/simple';

/* PROPS
pageTitle
buttonName
tableColumns
uri
*/

export class PagePreview extends React.Component {
    async componentDidMount() {
        const items = await simpleServer[this.props.uri].getAll();
        console.log(items)
        this.setState({ items });
    }

    state = {
        items: []
    }

    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state,callback)=>{
            return;
        };
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

        await simpleServer[this.props.uri].del(id);
    }

    render() {
        const columns = [
            { label: '№', name: 'key' },
            ...this.props.tableColumns,
            { label: 'Редактирование', name: 'edit' },
            { label: 'Удаление', name: 'del' },
        ];

        return (
            <div className="container">
                <PageTitle title={this.props.pageTitle}>
                    <Link className="btn btn-primary" to={`/${this.props.uri}/create`}>{this.props.buttonName}</Link>
                </PageTitle>
                <div className="table_main" style={{ maxWidth: '100%' }}>
                    <MUIDataTable
                        columns={columns}
                        data={this.state.items.map((item, key) => {
                            return {
                                key: key + 1,
                                ...item,
                                edit: (
                                    <td><Link className="btn btn-primary" to={`/${this.props.uri}/edit/${item.id}`}>Редактировать</Link></td>
                                ),
                                del: (
                                    <td><button onClick={() => this.onDeleteItem(item.id)} type="button" className="btn btn-danger">Удалить</button></td>
                                ),
                            }
                        })}
                    />
                </div>
            </div>
        );
    }
}
