import React from 'react';
import { graphql, Link } from 'gatsby';
import { List } from 'antd';

import Layout from '../components/Layout/Layout';

const TagsTemplate = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `Results for ${tag} • ${totalCount}`;

  return (
    <Layout>
      <h2 style={{ marginTop: 0 }}>{tagHeader}</h2>
      <List
        dataSource={edges}
        itemLayout="horizontal"
        renderItem={({ node }) => {
          const { path, title, spoiler } = node.frontmatter;
          return (
            <List.Item>
              <List.Item.Meta
                title={
                <Link to={path}>{title}</Link>
                }
                description={spoiler}
              ></List.Item.Meta>
            </List.Item>
          );
        }}
      ></List>
    </Layout>
  );
};

export default TagsTemplate;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            path
            spoiler
          }
        }
      }
    }
  }
`;
