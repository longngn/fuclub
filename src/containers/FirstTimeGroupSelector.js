import React from 'react'
import FirstTimeGroupCard from '../components/FirstTimeGroupCard'
import RaisedButton from 'material-ui/RaisedButton'
import styles from './FirstTimeGroupSelector.css'
import * as graph from '../services/graph'

export default class FirstTimeGroupSelector extends React.Component {
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
        const { accessToken } = this.props
        const groups = await graph.getGroups(accessToken)
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
                <h1 className={styles.header}>Select Your Groups</h1>
                <div className={styles.groups}>
                    {groups.map(e => 
                        <FirstTimeGroupCard 
                            group={e} 
                            onSelect={this.onSelectGroup}
                            onDeselect={this.onDeselectGroup}
                            key={e.id}
                        />
                    )}
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