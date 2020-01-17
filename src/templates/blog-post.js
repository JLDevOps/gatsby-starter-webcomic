import React from 'react';
import { Link, graphql } from 'gatsby';

import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'

class BlogPostTemplate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const post = this.props.data.markdownRemark;
    const { previous, next } = this.props.pageContext;

    return (
      <Layout>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.spoiler}
          slug={post.fields.slug}
        />
        <div className="article">
          <h1>{post.frontmatter.title}</h1>
          <p className="subtitle">
            {post.frontmatter.date}
            &nbsp; • &nbsp;
            {post.frontmatter.tags &&
              post.frontmatter.tags.map(tag => (
                <span key={tag} className="subtitle-tag">
                  <Link to={'/tags/' + tag.toLowerCase()}>#{tag}</Link>
                </span>
              ))}
          </p>
          <article dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <div className="post-footer">
          <ul
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              listStyle: 'none',
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  <FontAwesomeIcon icon={faArrowLeft} /> {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && !next.frontmatter.draft && (
                <Link to={next.fields.slug} rel="next">
                   {next.frontmatter.title} <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              )}
            </li>
          </ul>
        </div>
      </Layout>
    );
  }
}

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        spoiler
        path
        tags
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      fields {
        slug
      }
    }
  }
`;
