"use client";
import { Navbar, Container, Nav, Card, Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import React from 'react';

function Navigation() {
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand to="/">Dimz Project.</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="/download">Download</Nav.Link>
                  <Nav.Link href="/links">Links</Nav.Link>
                  <Nav.Link href="/about">About</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
  );
}

export default Navigation;
