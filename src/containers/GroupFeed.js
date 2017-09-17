import React from 'react'
import ReactDOM from 'react-dom'
import GroupPost from '../components/GroupPost'
import styles from './GroupFeed.css'
import orderBy from 'lodash/orderBy'

export default class GroupFeed extends React.Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.group.id !== this.props.group.id) 
            this.scrollToTop()
    }
    scrollToTop = () => {
        const element = ReactDOM.findDOMNode(this.topMostNodeToScrollInto)
        element.scrollIntoView()
    }
    render() {
        const { group } = this.props
        const postsSortedByTime = orderBy(group.feed, 'created_time', 'desc')
        return (
            <div className={styles.container}>
                <div ref={node => this.topMostNodeToScrollInto = node}></div>
                {postsSortedByTime.map(post => 
                    <GroupPost key={post.id} post={post} admins={group.admins} />
                )}
            </div>
        )
    }
}