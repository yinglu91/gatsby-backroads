import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

export const SEO = ({ title, description }) => {
  return (
    <Helmet title={title}>
      <meta name="description" content={description} />
    </Helmet>
  )
}
