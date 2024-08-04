"use client";
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function NotFoundPage() {
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <p>404 - Page Not Found!</p>
              <a class="btn btn-primary" href="/">Back</a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
