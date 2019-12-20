import React from 'react';
import profilePic from './profile-pic.png';
import { Link } from 'gatsby';
import './Bio.css';
import {Card, ListGroup, Accordion} from 'react-bootstrap';

class Bio extends React.Component {
  render() {
    return (
      <div className="bio">
        <div title="bio-block" className="avatar">
          <Link to={'/'}>
            <img src={profilePic} alt={`gatsby-comic-template`} />
          </Link>
        </div>
        <h4>Lorem Ipsum</h4>
        <p className="bio-slogan">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    );
  }
}

export default Bio;
