import React, { Component } from 'react'
import FeedTopbar from './FeedTopbar'
import PostsList from './PostsList'

interface FeedIndexProps {
    selectedOption: string
}

export default class FeedIndex extends Component<FeedIndexProps> {
    render() {
        const { selectedOption } = this.props

        return (
            <section className="feed-index">
                <FeedTopbar selectedOption={selectedOption} />
                <PostsList />
            </section>
        )
    }
}
