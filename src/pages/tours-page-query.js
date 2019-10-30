import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import { graphql } from 'gatsby'

const toursPageQuery = ({ data }) => {
  const { siteMetadata } = data.site

  return (
    <Layout>
      hello from blog page <Link to="/">back home</Link>
      <h1>title:{siteMetadata.title}</h1>
      <h1>author:{siteMetadata.author}</h1>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
        author
        data {
          age
        }
      }
    }
  }
`
export default toursPageQuery
