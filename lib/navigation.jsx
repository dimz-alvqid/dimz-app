"use client";
import { Navbar, Container, Nav, Card, Col, Row } from 'react-bootstrap';
import Link from 'next/link';
import React from 'react';
import SSRProvider from 'react-bootstrap/SSRProvider';

function Navigation() {
  return (
    <div>
      <SSRProvider>
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
        </SSRProvider>
      </div>
  );
}

export default Navigation;
