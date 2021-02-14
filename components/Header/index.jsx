import Head from "next/head";
import Link from "next/link";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button,
  Spinner,
} from "react-bootstrap";

const Header = ({ user }) => {
  return (
    <>
      <Navbar bg="light" expand="sm">
        <Navbar.Brand href="/">Spy</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav>
            {user === undefined ? (
              <Spinner animation="border" variant="dark" size="sm" />
            ) : null}
            {user ? (
              <Link href="/Home">
                <a>Manage</a>
              </Link>
            ) : null}
            {user === false ? (
              <Link href="/Entry/SignIn">
                <a>Sing In</a>
              </Link>
            ) : null}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      <style jsx>{`
        a {
          -webkit-tap-highlight-color: transparent;
          --blue: #007bff;
          --indigo: #6610f2;
          --purple: #6f42c1;
          --pink: #e83e8c;
          --red: #dc3545;
          --orange: #fd7e14;
          --yellow: #ffc107;
          --green: #28a745;
          --teal: #20c997;
          --cyan: #17a2b8;
          --white: #fff;
          --gray: #6c757d;
          --gray-dark: #343a40;
          --primary: #007bff;
          --secondary: #6c757d;
          --success: #28a745;
          --info: #17a2b8;
          --warning: #ffc107;
          --danger: #dc3545;
          --light: #f8f9fa;
          --dark: #343a40;
          --breakpoint-xs: 0;
          --breakpoint-sm: 576px;
          --breakpoint-md: 768px;
          --breakpoint-lg: 992px;
          --breakpoint-xl: 1200px;
          font-size: 1rem;
          font-weight: 400;
          line-height: 1.5;
          text-align: left;
          list-style: none;
          box-sizing: border-box;
          text-decoration: none;
          background-color: transparent;
          cursor: pointer;
          display: block;
          padding: 0.5rem 1rem;
          padding-right: 0.5rem;
          padding-left: 0.5rem;
          color: rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </>
  );
};

export default Header;
