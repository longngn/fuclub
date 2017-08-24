import React from 'react'
import styles from './GroupListItem.css'

export default ({ group, onSelect }) => (
    <div>
    <div className={styles.items}
    onClick={() => onSelect(group.id)}>
        <p>{group.name}</p>
    </div>
    <button> remove </button>
    </div>
)