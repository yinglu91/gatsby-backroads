import React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import {graphql} from 'gatsby'

export default function contact({data}) {
  return <Layout>
    <StyledHero img={data.contactBcg.childImageSharp.fluid}>

    </StyledHero>
    hello from contact
    </Layout>
}

export const query = graphql`
  query {
    contactBcg: file(relativePath: {eq: "connectBcg.jpeg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
