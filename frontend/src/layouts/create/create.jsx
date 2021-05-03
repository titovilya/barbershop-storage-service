import * as React from 'react';
import { PageTitle } from '../../components/pageTitle/pageTitle';
import { create } from '../../server';

/* PROPS
pageTitle
formScheme
redirectUrl
uri
*/

export class PageCreate extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};

        this.props.formScheme.forEach(item => this.state[item] = '');
    }

    onSubmit = async () => {
       await create(`/${this.props.uri}/create`, Object.assign(this.state));
       window.location.pathname = `/${this.props.uri}`;
    }

    render() {
        return (
            <div className="container">
                <PageTitle title={this.props.pageTitle} />
                <div className="row">
                    <form className="col s12">
                        {
                            this.props.formScheme.map((item, key) => (
                                <div key={key} className="row">
                                    <div className="input-field col s6">
                                        <input onChange={(e) => this.setState({ [item.field]: e.target.value })} id={item.field} type="text" className="validate" />
                                        <label htmlFor={item.field}>{item.name}</label>
                                    </div>
                                </div>
                            ))
                        }
                        <button onClick={this.onSubmit} className="btn waves-effect waves-light" type="button" name="action">Добавить</button>
                    </form>
                </div>
            </div>
        );
    }
}
