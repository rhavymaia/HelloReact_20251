import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import cards from '../datasets/cards';

const Cards = () => {
  // let itens = [...cards];
  // let itens = cards;

  return (
    <Container className="mt-4 mb-2">
      <Row>
        {cards.map((card, i) => {
          return (
            <Col key={i}>
              <Card>
                <Card.Img variant="top" src={card.src} />
                <Card.Body>
                  <Card.Title>{card.titulo}</Card.Title>
                  <Card.Text>{card.descricao}</Card.Text>
                  <Button variant="primary">Visitar</Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Cards;
