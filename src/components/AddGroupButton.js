import React from 'react'
import FlatButton from 'material-ui/FlatButton'
import styles from './AddGroupButton.css'

export default ({ onClick }) => (
    <FlatButton className={styles.container} onClick={onClick} style={{ height: '60px' }}>
        <object type="image/svg+xml" data={require("./add.svg")} className={styles.icon}>
        Add other groups
        </object>
        <p className={styles.label}>Chọn thêm nhóm</p>
    </FlatButton>
)