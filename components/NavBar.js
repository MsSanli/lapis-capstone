import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import Image from 'next/image';
import { signOut } from '../utils/auth';
import logo from '../public/img/fixedlogo.png';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="custom-navbar" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand>
            <Image
              src={logo}
              className="img"
              width={70}
              height={70}
              alt="logo navbar"
            />
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
            <Link passHref href="/">
              <Nav.Link style={{ textShadow: '0 0 10px rgba(255,255,255,0.8)' }}>Artisans</Nav.Link>
            </Link>
            <Link passHref href="/artisan/new">
              <Nav.Link style={{ textShadow: '0 0 10px rgba(255,255,255,0.8)' }}>Add Artisan</Nav.Link>
            </Link>
            <Link passHref href="/review/new">
              <Nav.Link style={{ textShadow: '0 0 10px rgba(255,255,255,0.8)' }}>Add Review</Nav.Link>
            </Link>
            <Link passHref href="/wishlist">
              <Nav.Link style={{ textShadow: '0 0 10px rgba(255,255,255,0.8)' }}>Wishlist</Nav.Link>
            </Link>
          </Nav>
          <Button variant="outline-danger" onClick={signOut} style={{ textShadow: '0 0 10px rgba(255,255,255,0.8)' }}>Sign Out</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
