import React from 'react'
import Chatbox from './Chatbox'
import GroupFeed from './GroupFeed'

export default ({ group, user }) => {
    const containerStyle = {
        flex: '1 1 auto',
        display: 'flex'
    }
    return (
        <div style={containerStyle}>
            <Chatbox groupId={group.id} user={user} />
            <GroupFeed group={group} />
        </div>
    )
}