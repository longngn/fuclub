import React from 'react'
import GroupList from './GroupList'
import GroupScreen from './GroupScreen'
import * as db from '../services/db'
import { updateGroupsOnBackground } from '../services/bridge'

export default class MainScreen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentGroupId: null,
            groups: {}
        }
        this.onSelectGroup = this.onSelectGroup.bind(this)
    }
    componentDidMount() {
        const { groupIds, accessToken } = this.props
        groupIds.forEach(id => db.onGroupChange(id, newGroupData => {
            if (newGroupData) {
                newGroupData.feed = JSON.parse(newGroupData.feed)
                this.setState(prevState => ({
                    currentGroupId: !prevState.currentGroupId ? id : prevState.currentGroupId,
                    groups: {
                        ...prevState.groups, 
                        [id]: newGroupData
                    }
                }))
            }
        }))
        updateGroupsOnBackground(accessToken, groupIds)
    }
    onSelectGroup(id) {
        this.setState({ currentGroupId: id })
    }
    render() {
        const { groups, currentGroupId } = this.state
        const containerStyle = {
            flex: '1 1 auto',
            display: 'flex',
        }
        return (
            <div style={containerStyle}>
                <GroupList 
                    groups={groups} 
                    onSelect={this.onSelectGroup}
                />
                {currentGroupId !== null && 
                <GroupScreen 
                    group={groups[currentGroupId]} 
                    user={this.props.user} 
                />}
            </div>
        )
    }
}