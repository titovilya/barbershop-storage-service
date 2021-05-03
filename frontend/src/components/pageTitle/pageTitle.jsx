import * as React from 'react';

export class PageTitle extends React.Component {
    render() {
        return (
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <h1>{this.props.title}</h1>
                {this.props.children}
            </div>
        )
    }
}
