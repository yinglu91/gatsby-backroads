import React from 'react'
import Tour from '../Tours/Tour'
import { useStaticQuery, graphql } from 'gatsby'
import Title from '../Title'
import styles from '../../css/items.module.css'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

const getFeaturedTours = graphql`
  query {
    featuredTours: allContentfulTour(filter: { featured: { eq: true } }) {
      edges {
        node {
          name
          price
          slug
          country
          id: contentful_id
          days
          images {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`

const FeaturedTours = () => {
  const data = useStaticQuery(getFeaturedTours)
  const tours = data.featuredTours.edges

  return (
    <section className={styles.tours}>
      <Title title="featured" subtitle="tours" />
      <div className={styles.center}>
        {tours.map(({ node }) => (
          <Tour key={node.id} tour={node} />
        ))}
      </div>

      <AniLink fade to="/tours" className="btn-primary">
        all tours
      </AniLink>
    </section>
  )
}

export default FeaturedTours
