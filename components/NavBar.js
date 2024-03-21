// import React from 'react';
// import Link from 'next/link';
// import {
//   Navbar, Container, Nav, Button,
// } from 'react-bootstrap';
// import { signOut } from '../utils/auth';

// export default function NavBar() {
//   return (
//     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ fontFamily: 'Lucida Handwriting' }}>
//       <Container>
//         <Link passHref href="/">
//           <Navbar.Brand>LAPIS</Navbar.Brand>
//         </Link>
//         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
//         <Navbar.Collapse id="responsive-navbar-nav">
//           <Nav className="me-auto">
//             {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
//             <Link passHref href="/">
//               <Nav.Link>Artisans</Nav.Link>
//             </Link>
//             <Link passHref href="/artisan/new">
//               <Nav.Link>Add Artisan</Nav.Link>
//             </Link>
//             <Link passHref href="/wishlist">
//               <Nav.Link>Wishlist</Nav.Link>
//             </Link>
//             <Button variant="danger" onClick={signOut}>Sign Out</Button>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

import React from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Button,
} from 'react-bootstrap';
import { signOut } from '../utils/auth';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Link passHref href="/">
          <Navbar.Brand style={{ textShadow: '0 0 10px rgba(255,255,255,0.8)' }}>LAPIS</Navbar.Brand>
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
            <Link passHref href="/reviewpage">
              <Nav.Link style={{ textShadow: '0 0 10px rgba(255,255,255,0.8)' }}>Reviews</Nav.Link>
            </Link>
            <Link passHref href="/wishlist">
              <Nav.Link style={{ textShadow: '0 0 10px rgba(255,255,255,0.8)' }}>Wishlist</Nav.Link>
            </Link>
            <Button variant="danger" onClick={signOut} style={{ textShadow: '0 0 10px rgba(255,255,255,0.8)' }}>Sign Out</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
