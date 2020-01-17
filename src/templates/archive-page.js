import React from 'react';
import { StaticQuery, graphql, Link, useStaticQuery } from 'gatsby';
import Layout from '../components/Layout/Layout';
import SEO from '../components/SEO/SEO';
import get from 'lodash/get';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import {Card} from 'react-bootstrap';
import _ from 'lodash';

// const query = graphql`
// {
//     allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}) {
//       edges {
//         node {
//           fields {
//             slug
//           }
//           frontmatter {
//             date(formatString: "MMMM DD, YYYY")
//             spoiler
//             tags
//             title
//           }
//         }
//       }
//     }
//   }
// `;

// const ArchivePage = () => {
//   return (
//     <StaticQuery
//       query={query}
//       render={data => {
//         return (
//             <React.Fragment>
//             <Header />
//             <div className="main-content">
//                 <main>
//                     {title}
//                 </main>
//                 <Footer />
//             </div>
//             </React.Fragment>
//         );
//       }}
//     />
//   );
// };

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
               <div>
                   {data.allMarkdownRemark.edges.map(({node}) => {
                       const title = _.get(node, 'frontmatter.title');
                       return (
                           {title}
                       )
                   })}
                </div>
            </>
        )
};

export default ArchivePage;