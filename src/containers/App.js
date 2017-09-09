import React from 'react'
import MainScreen from './MainScreen'
import Loading from '../components/Loading'
import * as db from '../services/db'
import * as bridge from '../services/bridge'

export default class App extends React.Component {
    state = {
        user: null,
        loading: true
    }
    async componentDidMount() {
        const { accessToken, uid } = this.props
        db.onUserChange(uid, newUserData => {
            this.setState({
                user: newUserData,
                loading: newUserData === null
            })
        })
        bridge.updateUserOnBackground(accessToken, uid)
    }
    render() {
        const { accessToken } = this.props
        const { user, loading } = this.state
        const containerStyle = {
            display: 'flex',
            flex: '1 1 auto'
        }
        return (
            <div style={containerStyle}>
                {loading? 
                <Loading /> : 
                <MainScreen 
                    groupIds={user.groups} 
                    accessToken={accessToken}
                    user={user}
                />}
            </div>
        )
    }
}