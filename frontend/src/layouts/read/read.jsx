import * as React from 'react';
import { PageTitle } from '../../components/pageTitle/pageTitle';
import { get, edit } from '../../server';

/* PROPS
pageTitle
formScheme
uri
id
*/

export class PageRead extends React.Component {
    state = {
        fields: [],
        isLoading: false
    };

    async componentDidMount() {
        const res = await get(`/${this.props.uri}/${this.props.id}`);
        console.log(res)
        this.setState({
            fields: res,
            isLoading: true
        });
    }

    onSubmit = async () => {
        await edit(`/${this.props.uri}/${this.props.id}`, Object.assign(this.state.fields));
        window.location.pathname = `/${this.props.uri}`;
    }

    render() {
        const formScheme = [{ field: 'id', name: 'ID' }, ...this.props.formScheme];

        return (
            <div className="container">
                <PageTitle title={this.props.pageTitle} />
                {
                    this.state.isLoading && Object.keys(this.state.fields).map((item, key) => {
                        return (
                            <div style={{display: 'flex', alignItems: 'center'}} key={key}>
                                <div style={{ fontWeight: 'bold', fontSize: '20px' }}>{formScheme[key].name}:</div>&nbsp;&nbsp;<div>{this.state.fields[item]}</div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
