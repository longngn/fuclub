import React from 'react'
import GroupListItem from '../components/GroupListItem'

export default ({ groups, onSelect }) => (
    <div>
        {Object.values(groups).map(group => 
            <GroupListItem
                key={group.id}
                onSelect={onSelect}
                group={group}
            />
        )}
    </div>
)