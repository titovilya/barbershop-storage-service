import * as React from 'react';
import { TextInput } from 'react-materialize';
import { PageTitle } from '../../components/pageTitle/pageTitle';
import { simpleServer } from './../../server/simple';

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
        const res = await simpleServer[this.props.uri].getCurr();
        this.setState(res);
    }

    onSubmit = async () => {
        await simpleServer[this.props.uri].edit(Object.assign(this.state));
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
                                this.props.formScheme.map((item, key) => {
                                    return (
                                        <div key={key} className="row">
                                            <div className="input-field col s6">
                                                <TextInput
                                                    label={item.label}
                                                    value={this.state[item.name]}
                                                    onChange={(e) => this.setState({ [item.name]: e.target.value })}
                                                    s={12}
                                                />
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
