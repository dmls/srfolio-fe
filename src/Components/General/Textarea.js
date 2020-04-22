import React from 'react';

class General_Textarea extends React.Component {
    render() {
        console.log('test');
        return (
            <div>{this.props.data.Content}</div>
        )
    }
}

export default General_Textarea