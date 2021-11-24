import React from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
export default function MovieCard({ item }) {
  const IMG_API = 'https://image.tmdb.org/t/p/w500/';
  return (
    <div>
      {/* <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={IMG_API + item.poster_path} />
      </Card> */}
      <Row xs={2} md={4} className="g-4">
        {Array.from({ length: 4 }).map((_, idx) => (
          <Col>
            <Card>
              <Card.Title>{item.original_title}</Card.Title>
              <Card.Img variant="top" src={IMG_API + item.poster_path} />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
