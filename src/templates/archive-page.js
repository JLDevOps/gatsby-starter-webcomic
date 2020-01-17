import React from 'react';
import { StaticQuery, graphql, Link, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import get from 'lodash/get';
import Header from '../components/Header/Header';
import _ from 'lodash';

const ArchivePage = () => {
    const data = useStaticQuery(
        graphql`
        {
            allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    date(formatString: "MMMM DD, YYYY")
                    spoiler
                    tags
                    title
                  }
                }
              }
            }
          }
        `
        )
        return (
            <>
            <Header />
            <br></br>
            <h2 align="center">Sorry, this page is a work-in-progress at the moment.</h2>
            <h4 align="center">Please check back or follow the progress <a href="https://github.com/JLDevOps/gatsby-starter-webcomic">here</a>.</h4>
            </>
        )
};

export default ArchivePage;