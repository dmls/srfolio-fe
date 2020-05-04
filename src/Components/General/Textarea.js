import React from 'react';
import marked from 'marked';
import {Container, Row, Col} from 'react-bootstrap';

class General_Textarea extends React.Component {
    render() {
        let data = this.props.data;
        return (
            <Container 
            fluid={data.Size === 'full_width'}
            className={'py-5 my-5 text-' + (data.Align !== null ? data.Align : 'left')}
            >
                <Row>
                    <Col>
                        <div dangerouslySetInnerHTML={{__html: marked(data.Content)}}></div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default General_Textarea