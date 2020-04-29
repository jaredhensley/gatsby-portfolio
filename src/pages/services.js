import React from "react";
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";

export default () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulService {
        edges {
          node {
            id
            iconName
            description
            name
          }
        }
      }
    }
  `);
  
  console.log(data);

  return (
    <Layout>
      service page
    </Layout>
  )
}

