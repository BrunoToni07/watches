import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import Button from 'react-bootstrap/Button';

function WatchMediaList() {
  const { watchId } = useParams();
  const [watch, setWatch] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchWatch = async () => {
      try {
        console.log(watchId)
        const response = await axios.get(`http://localhost:3000/watches/watch-media-links-by-id/${watchId}`);
        console.log(response.data)
        setWatch(response.data);
      } catch (error) {
        setError('Erro ao buscar dados.');
      } finally {
        setLoading(false);
      }
    };
    fetchWatch();
  }, [watchId]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Image src={watch.mediaUrl} fluid />
        </Col>
        <Col xs={12} md={6}>
          <Card>
            <Card.Body>
              <Card.Title>{watch.name}</Card.Title>
              <Card.Text>
                {watch.description}
              </Card.Text>
              <ListGroup>
                <ListGroupItem><strong>Marca:</strong> {watch.brand}</ListGroupItem>
                <ListGroupItem><strong>Família:</strong> {watch.family}</ListGroupItem>
                <ListGroupItem><strong>Modelo:</strong> {watch.model}</ListGroupItem>
                <ListGroupItem><strong>Ano:</strong> {watch.year}</ListGroupItem>
                <ListGroupItem><strong>Preço:</strong> {watch.price}</ListGroupItem>
              </ListGroup>
              <Button variant="primary" href={watch.buyLink}>Comprar</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default WatchMediaList;
