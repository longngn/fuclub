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
            groupsById: {},
            groupsAllIds: this.props.groupIds || []
        }
        this.handleSelectGroup = this.handleSelectGroup.bind(this)
        this.handleRemoveGroup = this.handleRemoveGroup.bind(this)
        this.handleAddGroups = this.handleAddGroups.bind(this)
    }
    componentDidMount() {
        this.fetchGroups(this.props.groupIds)
    }
    fetchGroups(groupIds) {
        if (!groupIds || !Array.isArray(groupIds)) return
        const { accessToken } = this.props
        groupIds.forEach(id => db.onGroupChange(id, newGroupData => {
            if (newGroupData) {
                newGroupData.feed = JSON.parse(newGroupData.feed)
                this.setState(prevState => ({
                    currentGroupId: !prevState.currentGroupId ? id : prevState.currentGroupId,
                    groupsById: {
                        ...prevState.groupsById, 
                        [id]: newGroupData
                    }
                }))
            }
        }))
        updateGroupsOnBackground(accessToken, groupIds)
    }
    handleSelectGroup(id) {
        this.setState({ currentGroupId: id })
    }
    handleAddGroups(groupIds) {
        this.fetchGroups(groupIds)
        this.setState((prevState, props) => {
            const newGroupsOrder = [...prevState.groupsAllIds, ...groupIds]
            db.updateUserGroups(props.user.id, newGroupsOrder)
            return { 
                groupsAllIds: newGroupsOrder
            }
        })
    }
    handleRemoveGroup(deletedGroupId) {
        this.setState((prevState, props) => {
            const newGroupsOrder = prevState.groupsAllIds.filter(gid => gid !== deletedGroupId)
            const nextGroupId = deletedGroupId === prevState.currentGroupId? newGroupsOrder[0] : prevState.currentGroupId
            // console.log(`${deletedGroupId} ${prevState.currentGroupId} ${newGroupsOrder[0]} ${nextGroupId}`)
            console.log(nextGroupId)
            db.updateUserGroups(props.user.id, newGroupsOrder)
            return {
                groupsAllIds: newGroupsOrder,
                currentGroupId: nextGroupId
            }
        })
    }
    render() {
        const { groupsById, groupsAllIds, currentGroupId } = this.state
        const containerStyle = {
            flex: '1 1 auto',
            display: 'flex',
        }
        return (
            <div style={containerStyle}>
                <GroupList 
                    groupsData={groupsById}
                    groupsOrder={groupsAllIds}
                    onSelect={this.handleSelectGroup}
                    onRemove={this.handleRemoveGroup}
                    onAddGroups={this.handleAddGroups}
                    accessToken={this.props.accessToken}
                />
                {currentGroupId && 
                <GroupScreen 
                    group={groupsById[currentGroupId]} 
                    user={this.props.user} 
                />}
            </div>
        )
    }
}