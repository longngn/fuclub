import React from 'react'
import styles from './GroupListItem.css'

export default ({ group, onSelect, onRemove }) => {
    
    return(
    <div>
        <div className={styles.items} onClick={() => onSelect(group.id)}>
            <p>{group.name}</p>
        </div>
        <button className={styles.rb} onClick={() => onRemove(group.id)}> remove </button>
    </div>
    )
}