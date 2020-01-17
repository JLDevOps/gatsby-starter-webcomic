import React from 'react';
import { StaticQuery, Link, graphql, useStaticQuery } from 'gatsby';
import _ from 'lodash';
import {Card, ListGroup, Accordion, Collapse, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

import './LatestPosts.css';

const LatestPosts = () => {
  const [open, setOpen] = React.useState(false)
  const data = useStaticQuery(
    graphql`
    query {
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 5, filter: {frontmatter: {title: {ne: "About"}}}) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              date(formatString: "MMMM DD, YYYY")
              title
              tags
              path
            }
          }
        }
      }
    }
  `)
  return (
    <>
    <div>
      <div onClick={e => setOpen(!open)}>
        <h4 style={{ textAlign: 'center' }}>Latest Posts &nbsp; 
          { open ? (
            <FontAwesomeIcon icon={faMinus} />
            ) : (
              <FontAwesomeIcon icon={faPlus} />
            )
          }
        </h4>
      </div>
      <div>
      <Collapse in={open}>
        <ListGroup variant="flush">
          {data.allMarkdownRemark.edges.map(({ node }) => {
            const title = _.get(node, 'frontmatter.title');
            const path = _.get(node, 'frontmatter.path');
            const date = _.get(node, 'frontmatter.date');
            const tags = _.get(node, 'frontmatter.tags');
            return (
              <ListGroup.Item>
                <Link to={path} className="postTitle">{title}</Link>
                <br/>
                <a className="postDate">{date}</a>
                <br/>
                {tags && tags.map(tag => (
                <span key={tag} className="postDate">
                <Link to={'/tags/' + tag.toLowerCase()}>#{tag} &nbsp;</Link>
                  </span>
                ))}
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </Collapse>
      </div>
    </div>
    </>
    )
}

export default LatestPosts;
