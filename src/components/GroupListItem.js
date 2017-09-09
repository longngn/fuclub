import React from 'react'
import styles from './GroupListItem.css'

export default ({ group, onSelect, onRemove }) => {
    const defaultCover = "https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/Onaj08c4thr.png"
    return(
    <div onClick={() => onSelect(group.id)} title = {group.name} className={styles.items}>
        <img src = {group.cover ? group.cover : defaultCover} className={styles.cover} alt = {group.name}>
        </img>
        <div className = {styles.groupName}>
             {group.name}
        </div>   
    </div>
    )
}