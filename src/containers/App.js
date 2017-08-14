import React from 'react'
import styles from './App.css'

const App = ({ uid, accessToken }) => (
    <div className={styles.container}>
        {uid}<br/>
        {accessToken}
    </div>
)
export default App