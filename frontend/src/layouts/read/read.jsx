import * as React from 'react';
import { PageTitle } from '../../components/pageTitle/pageTitle';
import { simpleServer } from './../../server/simple';

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
        const res = await simpleServer[this.props.uri].getCurr();
        this.setState({
            fields: res,
            isLoading: true
        });
    }

    render() {
        const formScheme = [{ field: 'id', title: 'ID' }, ...this.props.formScheme];

        return (
            <div className="container">
                <PageTitle title={this.props.pageTitle} />
                {
                    this.state.isLoading && Object.keys(this.state.fields).map((item, key) => {
                        return (
                            <div style={{display: 'flex', alignItems: 'center'}} key={key}>
                                <div style={{ fontWeight: 'bold', fontSize: '20px' }}>{formScheme[key].title}:</div>&nbsp;&nbsp;<div>{this.state.fields[item]}</div>
                            </div>
                        )
                    })
                }
            </div>
        );
    }
}
