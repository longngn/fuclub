import React from 'react'
import Chatbox from './Chatbox'
import GroupFeed from './GroupFeed'
import SplitPane from 'react-split-pane'

export default ({ group }) => (
    <SplitPane split='vertical' minSize={300} defaultSize='50%' primary='second'>
        <GroupFeed group={group} />
        <Chatbox />
    </SplitPane>
)