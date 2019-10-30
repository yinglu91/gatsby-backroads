import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

// can't be FristQuery, query name is global, need to be unique
const getSiteData = graphql`
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

const RegularHeader = () => {
  return (
    <StaticQuery
      query={getSiteData}
      render={({ site: { siteMetadata } }) => {
        return (
          <div>
            <h1>title:{siteMetadata.title}</h1>
            <h1>author:{siteMetadata.author}</h1>
          </div>
        )
      }}
    />
  )
}

export default RegularHeader
