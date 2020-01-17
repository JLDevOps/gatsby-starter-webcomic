import React from 'react';
import { Tag } from 'antd';
import { graphql, Link, useStaticQuery } from 'gatsby';
import get from 'lodash/get';
import { ListGroup, Collapse } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { tagColor } from '../../utils/helpers';

const Tags = () => {
  const [open, setOpen] = React.useState(true)
  const data = useStaticQuery(
    graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
        group(field: frontmatter___tags) {
          fieldValue
          totalCount
        }
      }
    }
  `)
  const tags = get(data, 'allMarkdownRemark.group');
  return (
    <>
    <div>
      <div onClick={e => setOpen(!open)}>
        <h4 style={{ textAlign: 'center' }}>Tags &nbsp; 
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
          <ListGroup.Item>
            {tags.map(tag => (
                <Link
                  key={tag.fieldValue}
                  to={`/tags/${encodeURIComponent(tag.fieldValue.toLowerCase())}`}
                >
                  <Tag color={tagColor(tag.fieldValue)}>
                    {tag.fieldValue} • {tag.totalCount}
                  </Tag>
                </Link>
              ))}
          </ListGroup.Item>
          </ListGroup>
        </Collapse>
      </div>
    </div>
    </>
  )
}

export default Tags;