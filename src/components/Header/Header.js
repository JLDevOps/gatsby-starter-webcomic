import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Header.css';
import Search from '../Search/Search';
import {Navbar, Nav} from 'react-bootstrap';


const Header = () => (
  <StaticQuery
  query={graphql`
  query SearchTestIndexQuery {
    siteSearchIndex {
      index
    }
  }
`}
  render={data => (
    <header>
      <Navbar border="dark" bg="light" expand="lg">
        <Navbar.Brand href={'/'}>Lorem Ipsum</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto shadow-none">
          <Nav.Link href={'/about'}>About</Nav.Link>
          <Nav.Link href={'/archive'}>Archive</Nav.Link>
          <Nav.Link href={'/rss.xml'}>RSS</Nav.Link>
          <Search searchIndex={data.siteSearchIndex.index}/>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
  </header>
  )}
  />
);
export default Header;
