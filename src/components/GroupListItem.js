import React from 'react'
import styles from './GroupListItem.css'

export default ({ group, onSelect, onRemove, isBeingSelected }) => {
    const defaultCover = "https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/Onaj08c4thr.png"
    return (
        <div onClick={() => onSelect(group.id)} title={group.name} className={styles.container}>
            <img 
                src={group.cover? group.cover : defaultCover} 
                className={styles.cover} 
                alt={group.name}
            ></img>
            <span 
                className={styles.removeButton} 
                title='Remove group'
                onClick={(e) => {
                    e.stopPropagation()
                    onRemove(group.id)
                }}
            >
                <i className='fa fa-times' aria-hidden='true'></i>  
            </span>
            <div className = {styles.groupName}>
                {group.name}
            </div> 
        </div>
    )
}