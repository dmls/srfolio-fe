import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';

class General_Widecard extends React.Component {
    render() {
        let data = this.props.data;
        
        return (
            <Container className="my-5">
                <Row>
                    {data.Image_Position !== 'right' && 
                        <Col className="col-12 col-sm-4">
                            <Image fluid src={window.cms_url + data.Image.url} />
                        </Col>
                    }

                    <Col className="col-12 col-sm-8 my-4">
                        <div className="center-vertical">
                            <Row>
                                <Col>
                                    <h1>{data.Title}</h1>
                                </Col>
                            </Row>

                            <Row>
                                <Col>{data.Text}</Col>
                            </Row>
                        </div>
                    </Col>

                    {data.Image_Position === 'right' && 
                        <Col className="col-12 col-sm-4">
                            <Image fluid src={window.cms_url + data.Image.url} />
                        </Col>
                    }
                </Row>
            </Container>
        )
    }
}

export default General_Widecard