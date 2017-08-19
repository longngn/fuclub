import React from 'react'
import GroupSelectorCard from '../components/GroupSelectorCard'
import RaisedButton from 'material-ui/RaisedButton'
import styles from './GroupSelector.css'
import * as graph from '../services/graph'

export default class GroupSelector extends React.Component {
    state = {
        groups: [],
        selectedGroups: []
    }
    constructor(props) {
        super(props)
        this.onSelectGroup = this.onSelectGroup.bind(this)
        this.onDeselectGroup = this.onDeselectGroup.bind(this)
    }
    async componentDidMount() {
        const { accessToken, existedGroups } = this.props
        let groups = await graph.getGroupsOfUser(accessToken)
        if (existedGroups) groups = groups.filter(e => !existedGroups.includes(e.id))
        this.setState({ groups })
    }
    onSelectGroup(id) {
        if (this.state.selectedGroups.includes(id)) return
        this.setState(prevState => 
            ({ selectedGroups: [...prevState.selectedGroups, id] })
        )
    }
    onDeselectGroup(id) {
        this.setState(prevState => 
            ({ selectedGroups: prevState.selectedGroups.filter(e => e !== id) })
        )
    }
    render() {
        const { groups, selectedGroups } = this.state
        return (
            <div className={styles.container}>
                <div className={styles.selectorPanel}>
                    <h1 className={styles.header}>Select Your Groups</h1>
                    <div className={styles.groups}>
                        {groups.map(e => 
                            <GroupSelectorCard 
                                group={e} 
                                onSelect={this.onSelectGroup}
                                onDeselect={this.onDeselectGroup}
                                key={e.id}
                            />
                        )}
                    </div>
                </div>
                <RaisedButton 
                    disabled={selectedGroups.length === 0} 
                    onClick={() => this.props.onSelect(selectedGroups)}
                    className={styles.button}
                >
                    Proceed
                </RaisedButton>
            </div>
        )
    }
}