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
        this.onRemoveGroup = this.onRemoveGroup.bind(this)
    }
    componentDidMount() {
        this.addGroups(this.props.groupIds)
    }
    addGroups(groupIds) {
        const { accessToken } = this.props
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
    onRemoveGroup(deletedGroupId) {
        this.setState((prevState, props) => {
            const newGroups = Object.assign({}, prevState.groups)
            delete newGroups[deletedGroupId]
            const nextGroupId = Object.keys(newGroups)[0];
            db.updateUserGroups(props.user.id, Object.keys(newGroups))
            return {
                groups: newGroups,
                currentGroupId: nextGroupId
            }
        })
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
                    onRemove={this.onRemoveGroup}
                />
                {currentGroupId && 
                <GroupScreen 
                    group={groups[currentGroupId]} 
                    user={this.props.user} 
                />}
            </div>
        )
    }
}