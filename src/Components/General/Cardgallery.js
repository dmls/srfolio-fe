import React from 'react';
import marked from 'marked';
import { Container, Row, Col, Card } from 'react-bootstrap';

class General_Cardgallery extends React.Component {
    render() {
        let data = this.props.data;
        let colWidth = 12 / data.Columns;

        return (
            <Container className="my-5">
                <Row>
                    {
                        data.Cardsingle.map(function(card, index) {
                            return (
                                <Col key={index} className={'mb-5 col-12 col-sm-' + colWidth}>
                                    <Card>
                                        <Card.Img src={window.cms_url + card.Img.url} />
                                        <Card.Body>
                                            <Card.Title>{card.Heading}</Card.Title>
                                            <Card.Text dangerouslySetInnerHTML={
                                            {__html: marked(card.Text)}
                                            }>
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        )
    }
}

export default General_Cardgallery