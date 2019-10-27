import React from 'react'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import {graphql} from 'gatsby'

const about = () => {
  return <div></div>
}

export default about

export const query = graphql`
  query {
    defaultBcg: file(relativePath: {eq: "defaultBcg.jpeg"}) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 4160) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`