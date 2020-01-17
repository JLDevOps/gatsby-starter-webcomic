import React, { Component } from "react"
import PropTypes from "prop-types"
import { Index } from "elasticlunr"

import { Link } from "gatsby"
import './Search.css';
import { Form, FormControl, Button, ListGroup, ListGroupItem} from 'react-bootstrap';


// Search component
export default class Search extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
    }
  }

  render() {
    return (
      <div className="searchForm">
        <Form>
          <FormControl type="text" placeholder="Search tags" className="mr-sm-2" value={this.state.query} onChange={this.search}/>
        </Form>
        <ListGroup variant="flush" className="searchResults">
        {this.state.results.map(page => (
          <ListGroup.Item>
            <li key={page.id}>
              <Link to={`/` + page.path}>{page.title}</Link>
            </li>
          </ListGroup.Item>
        ))}
        </ListGroup>
      </div>
    )
  }

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex)

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    })
  }
}

Search.propTypes = {
  searchIndex: PropTypes.object,
}