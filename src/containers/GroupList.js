import React from 'react';
import GroupListItem from '../components/GroupListItem';
import styles from './GroupList.css';

export default ({ groups, onSelect, onRemove }) => (
    <div className={styles.container}>
        <div>
            {Object.values(groups).map(group => 
                <GroupListItem
                    key={group.id}
                    onSelect={onSelect}
                    onRemove={onRemove}
                    group={group}
                />
            )}
        </div>
        {/* <button className={styles.addbutton} > Add More Groups </button> */}
    </div>
)