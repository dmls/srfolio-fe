import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';

class General_Banner extends React.Component {
    render() {
        let data = this.props.data;
        return (
            <Container 
                className="banner text-center text-white"
                fluid
                style={{
                    background: 'url("' + window.cms_url + data.Image.url + '")'
                }}
            >
                <Col className="center-vertical">
                    <Row>
                        <Col>
                            <h1>{data.Heading}</h1>
                            <h4>{data.Subheading || ''}</h4>
                        </Col>
                    </Row>

                    {data.CTA_Label !== null && 
                        <Row className="my-4">
                            <Col>
                                <Button 
                                    href={data.CTA_URL || ''}
                                    target="_blank"
                                >
                                    {data.CTA_Label}
                                </Button>
                            </Col>
                        </Row>
                    }
                </Col>
            </Container>
        )
    }
}

export default General_Banner