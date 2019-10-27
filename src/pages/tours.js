import React, { Component } from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby'
import StyledHero from '../components/StyledHero'
import Banner from '../components/Banner'
import About from '../components/Home/About'
import Services from '../components/Home/Services'
import {graphql} from 'gatsby'

export default class tours extends Component {
  render() {
    return (
      <Layout>
        <StyledHero img={this.props.data.defaultBcg.childImageSharp.fluid}>

        </StyledHero>
        hello from tours page!!!!
        
      </Layout>
    )
  }
}

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
