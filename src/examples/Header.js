import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

// tag function, optional: key work: query , query name(optional): FristQuery
const getSiteData = graphql`
  query FristQuery {
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
const Header = () => {
  const {
    site: { siteMetadata },
  } = useStaticQuery(getSiteData)

  console.log('YYYYYY', siteMetadata)
  return (
    <div>
      <h1>title:{siteMetadata.title}</h1>
      <h1>author:{siteMetadata.author}</h1>
    </div>
  )
}

export default Header
