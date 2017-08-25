import React from 'react'
import GroupListItem from '../components/GroupListItem'

export default ({ groups, onSelect }) => (
    <div style={{ flex: '0 0 200px' }}>
        {Object.values(groups).map(group => 
            <GroupListItem
                key={group.id}
                onSelect={onSelect}
                group={group}
            />
        )}
    </div>
)