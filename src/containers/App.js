import React from 'react'
import GroupSelector from './GroupSelector'
import MainScreen from './MainScreen'
import Loading from '../components/Loading'
import styles from './App.css'
import * as db from '../services/db'
import * as graph from '../services/graph'

export default class App extends React.Component {
    state = {
        user: null,
        loading: true
    }
    constructor(props) {
        super(props)
        this.onFirstTimeSelect = this.onFirstTimeSelect.bind(this)
    }
    async componentDidMount() {
        const { uid } = this.props
        const user = await db.getUser(uid)
        if (user) this.setState({ user })
        this.setState({ loading: false })
    }
    async onFirstTimeSelect(groups) {
        const { accessToken, uid } = this.props
        const user = await graph.getUser(accessToken, uid)
        user.groups = groups
        this.setState({ user })
        db.updateUser(user)
    }
    render() {
        const { accessToken } = this.props
        const { user, loading } = this.state
        return (
            <div className={styles.container}>
                {loading? <Loading /> :
                    (user && user.groups)? <MainScreen groupIds={user.groups} accessToken={accessToken}/> :
                    <GroupSelector 
                        accessToken={this.props.accessToken}
                        onSelect={this.onFirstTimeSelect}
                    />
                }
            </div>
        )
    }
}