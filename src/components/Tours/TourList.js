import React, { Component } from 'react'
import styles from '../../css/items.module.css'
import Tour from './Tour'
import Title from '../../components/Title'

export default class TourList extends Component {
    state = {
        tours: [],
        soutedTours: []
    }

    componentDidMount() {
        this.setState({
            tours: this.props.tours.edges,
            soutedTours: this.props.tours.edges
        })
    }

    render() {
        return (
            <section className={styles.tours}>
                <Title title="our" subtitle="tours" />

                <div className={styles.center}>
                {
                    this.state.soutedTours.map(({node}) => (
                        <Tour key={node.id} tour={node} />
                    ))
                }
                </div>
            </section>
        )
    }
}
