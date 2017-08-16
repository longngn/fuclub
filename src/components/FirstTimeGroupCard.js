import React from 'react'
import styles from './FirstTimeGroupCard.css'

export default class FirstTimeGroupCard extends React.Component {
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
                style={this.state.selected? { border: '3px solid blue' } : {}}
                onClick={this.onClick}
            >
                <p className={styles.title}>{name}</p>
            </div>
        )
    }
}