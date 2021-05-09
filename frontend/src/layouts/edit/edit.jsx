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
    state = {
        fields: null
    };

    async componentDidMount() {
        const fields = {};
        const res = await simpleServer[this.props.uri].getCurr(this.props.id);

        this.props.formScheme.forEach(item => {
            fields[item.name] = res[item.name];
        });
        this.setState({ fields });
        console.log(fields)
    }

    onSubmit = async () => {
        try {
            await simpleServer[this.props.uri].edit(this.props.id, Object.assign(this.state.fields));
        } catch (e) {
            console.log(e)
        }
        finally {
            window.location.pathname = `/${this.props.uri}`;
        }
    }

    componentWillUnmount() {
        // fix Warning: Can't perform a React state update on an unmounted component
        this.setState = (state,callback)=>{
            return;
        };
    }

    render() {
        let isDisabled = false;

        this.props.formScheme.forEach((item) => {
            if (this.state.fields && !this.state.fields[item.name]) {
                isDisabled = true;
            }
        });

        return (
            <div className="container">
                <PageTitle title={this.props.pageTitle} />
                <table id="table" className="table">
                    <div className="row">
                        <form className="col s12">
                            {
                                this.state.fields && this.props.formScheme.map((item, key) => (
                                    <div key={key} className="row">
                                        <div className="input-field col s6">
                                            <TextInput
                                                label={item.label}
                                                value={this.state.fields[item.name]}
                                                name={key}
                                                onChange={(e) => {
                                                    this.setState(state => {
                                                        return {
                                                            ...state,
                                                            fields: {
                                                                ...state.fields,
                                                                [item.name]: e.target.value
                                                            }
                                                        }
                                                    });
                                                }}
                                                s={12}
                                            />
                                        </div>
                                    </div>
                                ))
                            }
                            <button disabled={isDisabled} onClick={this.onSubmit} className="btn waves-effect waves-light" type="button" name="action">Сохранить</button>
                        </form>
                    </div>
                </table>
            </div>
        );
    }
}
