import React from 'react'
import styles from './GroupSelectorCard.css'
import { colors } from '../config'

export default class GroupSelectorCard extends React.Component {
    state = {
        selected: false
    }
    constructor(props) {
        super(props)
        this.onClick = this.onClick.bind(this)
    }
    onClick() {
        const { id } = this.props.group
        if (this.state.selected) this.props.onDeselect(id)
        else this.props.onSelect(id)
        this.setState(prevState => ({ selected: !prevState.selected }))
    }
    render() {
        const { name } = this.props.group
        return (
            <div 
                className={styles.container} 
                style={this.state.selected? { 
                    backgroundColor: colors.sub, 
                    color: '#FFF' 
                } : {}}
                onClick={this.onClick}
            >
                <p className={styles.groupName}>{name}</p>
            </div>
        )
    }
}