import React from 'react';
import { StaticQuery, graphql, Link } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons'
import get from 'lodash/get';

const query = graphql`
query {
  markdownRemark(frontmatter: {title: {eq: "About"}}) {
    frontmatter {
      title
    }
    html
  }
}
`;

const AboutPage = () => {
  return (
    <StaticQuery
      query={query}
      render={data => {
        const post = get(data, 'markdownRemark');
        return (
            <Layout>
                <SEO/>
                <div className="article">
                  <article dangerouslySetInnerHTML={{ __html: post.html }} />
                </div>
            </Layout>
        );
      }}
    />
  );
};

export default AboutPage;