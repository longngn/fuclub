import React from 'react'
import styles from './GroupListItem.css'
import { SortableElement } from 'react-sortable-hoc'
import LinesEllipsis from 'react-lines-ellipsis'

const GroupListItem = ({ group, onSelect, onRemove, isBeingSelected }) => {
    const defaultCover = "https://static.xx.fbcdn.net/rsrc.php/v3/yG/r/Onaj08c4thr.png"
    return (
        <div 
            className={styles.container}
            title={group.name}
            style={isBeingSelected? { backgroundColor: '#CCC' } : {}} 
            onClick={() => onSelect(group.id)} 
        >
            <img 
                className={styles.cover} 
                src={group.cover? group.cover : defaultCover} 
                alt={group.name}
            ></img>
            <div className = {styles.groupName}>
                <LinesEllipsis 
                    text={group.name} 
                    maxLine='2' 
                    ellipsis='...' 
                    trimRight 
                />
            </div>  
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
        </div>
    )
}
export default SortableElement(GroupListItem)