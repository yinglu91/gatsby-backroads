import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import {graphql} from 'gatsby'

const blog = ({data}) => {
  return (
    <Layout>
      <StyledHero img={data.blogBcg.childImageSharp.fluid} />
      hello from blog page <Link to="/">back home</Link>
    </Layout>
  )
}

export default blog

export const query = graphql`
  query {
    blogBcg: file(relativePath: {eq: "blogBcg.jpeg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
