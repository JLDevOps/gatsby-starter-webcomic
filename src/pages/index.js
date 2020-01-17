import React from 'react';
import { Link, graphql, StaticQuery } from 'gatsby';
import _ from 'lodash';
import Img from "gatsby-image"
import {Card} from 'react-bootstrap';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';

class BlogIndex extends React.Component {
  render() {
    const posts = _.get(this, 'props.data.allMarkdownRemark.edges');
    return (
      <Layout>
        <SEO />
        <div className="home">
          {posts.map(({ node }) => {
            const title = _.get(node, 'frontmatter.title') || node.fields.slug;
            let featuredImgFluid = _.get(node, 'frontmatter.featuredImage.childImageSharp.fluid');
            let postTitle;
            let imageQuery = "";
            if(featuredImgFluid) {
              postTitle = "";
              imageQuery = <Link to={node.fields.slug}><Img fluid={featuredImgFluid} /></Link>
            } else {
              postTitle = <h2><Link to={node.fields.slug}>{title}</Link></h2>;
            };
            return (
              <div className="post" key={node.fields.slug}>
                {postTitle}
                {imageQuery}
                <p className="subtitle">
                  <br></br>
                  <h5>{node.frontmatter.date}</h5>
                  {node.frontmatter.tags &&
                    node.frontmatter.tags.map(tag => (
                      <span key={tag} className="subtitle-tag">
                        <Link to={'/tags/' + tag.toLowerCase()}>#{tag}</Link>
                      </span>
                    ))}
                </p>
                <p
                  dangerouslySetInnerHTML={{ __html: node.frontmatter.spoiler }}
                />
              </div>
            );
          })}
        </div>
      </Layout>
    );
  }
}

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, filter: {frontmatter: {title: {ne: "About"}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            spoiler
            tags
            featuredImage {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
