import React from 'react'
import GroupList from './GroupList'
import GroupScreen from './GroupScreen'
import SplitPane from 'react-split-pane'
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
        return (
            <SplitPane split='vertical' minSize={50} defaultSize={200}>
                <GroupList 
                    groups={groups} 
                    onSelect={this.onSelectGroup}
                />
                {currentGroupId !== null && <GroupScreen group={groups[currentGroupId]} />}
            </SplitPane>
        )
    }
}