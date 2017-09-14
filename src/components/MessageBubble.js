import React from 'react'
import Linkify from 'react-linkify'
import styles from './MessageBubble.css'

export default ({ children, color, backgroundColor, isOwned, isFile }) => {
    color = color || 'black'
    backgroundColor = backgroundColor || '#EEE'
    return (
        <div 
            className={isOwned? styles.ownedBubble : styles.unownedBubble} 
            style={{ color, backgroundColor }}
        >
            <Linkify properties={{ target: '_blank' }}>
                <p className={styles.text}>
                    <span className={isFile && styles.file}>{children}</span>
                </p>
            </Linkify>
        </div>
    )
}
