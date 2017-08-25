import React from 'react'
import styles from './MessageBubble.css'

export default ({ children, color, backgroundColor, isOwned }) => {
    color = color || 'black'
    backgroundColor = backgroundColor || '#EEE'
    return (
        <div 
            className={isOwned? styles.ownedBubble : styles.unownedBubble} 
            style={{ color, backgroundColor }}
        >
            <p className={styles.text}>{children}</p>
        </div>
    )
}
