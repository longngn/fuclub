import React from 'react'

export default ({ group, onSelect }) => (
    <div onClick={() => onSelect(group.id)}>
        <p>{group.name}</p>
    </div>
)