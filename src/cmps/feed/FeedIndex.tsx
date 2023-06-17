import React, { Component } from 'react'
import { feedService } from '../../services/feed.service'
import FeedTopbar from './FeedTopbar'
import FeedList from './FeedList'
import SqueakBox from './SqueakBox'
interface FeedIndexProps {
    selectedOption: string
}

export default class FeedIndex extends Component<FeedIndexProps> {
    state = {
        feedPosts: []
    }
    componentDidMount(): void {
        const demoData = feedService.getRandomPosts(5)
        this.setState({ feedPosts: demoData })
    }
    render() {
        const { selectedOption } = this.props
        const { feedPosts } = this.state
        return (
            <section className="feed-index">
                <FeedTopbar selectedOption={selectedOption} />
                <SqueakBox />
                <FeedList feedPosts={feedPosts} />
            </section>
        )
    }
}
