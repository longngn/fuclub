import React from 'react'
import GroupSelectorCard from '../components/GroupSelectorCard'
import FlatButton from 'material-ui/FlatButton'
import Dialog from 'material-ui/Dialog'
import SearchBar from 'material-ui-search-bar'
import styles from './GroupSelector.css'
import * as graph from '../services/graph'

export default class GroupSelector extends React.Component {
    state = {
        groups: [],
        selectedGroups: [],
        searchText: ''
    }
    constructor(props) {
        super(props)
        this.handleSelectGroup = this.handleSelectGroup.bind(this)
        this.handleDeselectGroup = this.handleDeselectGroup.bind(this)
        this.handleFinishSelectingGroups = this.handleFinishSelectingGroups.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }
    async componentDidMount() {
        const { accessToken, existedGroups } = this.props
        let groups = await graph.getGroupsOfUser(accessToken)
        if (existedGroups) groups = groups.filter(e => !existedGroups.includes(e.id))
        this.setState({ groups })
    }
    handleSelectGroup(id) {
        if (this.state.selectedGroups.includes(id)) return
        this.setState(prevState => 
            ({ selectedGroups: [...prevState.selectedGroups, id] })
        )
    }
    handleDeselectGroup(id) {
        this.setState(prevState => 
            ({ selectedGroups: prevState.selectedGroups.filter(e => e !== id) })
        )
    }
    handleFinishSelectingGroups() {
        this.props.onSelect(this.state.selectedGroups)
        this.handleClose()
    }
    handleClose() {
        this.setState({ 
            selectedGroups: [],
            searchText: ''
        })
        this.props.onRequestClose()
    }
    render() {
        const { groups, selectedGroups, searchText } = this.state
        return (
            <Dialog
                open={this.props.open}
                onRequestClose={this.handleClose}
                title='Chọn nhóm mà bạn muốn theo dõi'
                bodyClassName={styles.container}
                bodyStyle={{ border: 'none', paddingBottom: 0 }}
                autoScrollBodyContent={true}
                actions={[
                    <FlatButton
                        label='HỦY'
                        primary={true}
                        onClick={this.handleClose} 
                    />,
                    <FlatButton 
                        label='CHỌN'
                        primary={true}
                        disabled={selectedGroups.length === 0}
                        onClick={this.handleFinishSelectingGroups}
                    />
                ]}
            >
                <SearchBar
                    hintText='Tìm nhóm...'
                    style={{ flex: '0 0 auto' }}
                    onChange={text => this.setState({ searchText: text })}
                />
                <div className={styles.groups}>
                    {groups.map(e => 
                        <GroupSelectorCard 
                            group={e}
                            searchText={searchText}
                            onSelect={this.handleSelectGroup}
                            onDeselect={this.handleDeselectGroup}
                            key={e.id}
                        />
                    )}
                </div>
            </Dialog>
        )
    }
}