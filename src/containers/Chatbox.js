import React from 'react'
import Divider from 'material-ui/Divider'
import InputField from './InputField'
// import MessagesArea from './MessagesArea'
import styles from './App.css'
import * as db from '../services/db';

export default class App extends React.Component {
    render() {
        const { user, groupId } = this.props
        return (
            <div className={styles.container}>
                {/* <MessagesArea 
                    currentUser={user}
                    getUser={ id => this.state.allUsersById[id] } 
                /> */}
                <Divider style={{ flex: '0 0 auto' }}/>
                <InputField user={user} groupId={groupId} />
                <Divider style={{ flex: '0 0 auto' }}/>
            </div>
        )
    }
}