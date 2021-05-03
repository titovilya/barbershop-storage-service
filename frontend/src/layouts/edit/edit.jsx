import * as React from 'react';
import { PageTitle } from '../../components/pageTitle/pageTitle';
import { get, edit } from '../../server';

/* PROPS
pageTitle
formScheme
uri
id
*/

export class PageEdit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.props.formScheme.forEach(item => this.state[item.field] = '');
    }

    async componentDidMount() {
        const res = await get(`/${this.props.uri}/${this.props.id}`);
        this.setState(res);
    }

    onSubmit = async () => {
        await edit(`/${this.props.uri}/${this.props.id}`, Object.assign(this.state));
        window.location.pathname = `/${this.props.uri}`;
    }

    render() {
        return (
            <div className="container">
                <PageTitle title={this.props.pageTitle} />
                <table id="table" className="table">
                    <div className="row">
                        <form className="col s12">
                            {
                                this.props.formScheme.map(item => {
                                    console.log(item, this.state);
                                    return (
                                        <div className="row">
                                            <div className="input-field col s6">
                                                <input value={this.state[item.field]} onChange={(e) => this.setState({ [item.field]: e.target.value })} id={item.field} type="text" className="validate" />
                                                <label htmlFor={item.field}>{item.name}</label>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                            <button onClick={this.onSubmit} className="btn waves-effect waves-light" type="button" name="action">Сохранить</button>
                        </form>
                    </div>
                </table>
            </div>
        );
    }
}
