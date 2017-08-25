import React from 'react'
import ReactDOM from 'react-dom'
import Message from '../components/Message'
import styles from './MessagesArea.css'
import * as db from '../services/db';

export default class MessagesArea extends React.Component {
    state = {
        messages: []
    }
    dbListener = null
    componentDidMount() {
        this.dbListener = this.listenToMessagesData(this.props.groupId)
        this.scrollToBottom()
    }
    componentDidUpdate() {
        this.scrollToBottom()
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.groupId !== this.props.groupId) {
            db.offMessagesDataChange(this.props.groupId, this.dbListener)
            this.setState({ messages: [] })
            this.dbListener = this.listenToMessagesData(nextProps.groupId)
        }
    }

    listenToMessagesData(groupId) {
        return db.onMessagesDataChange(groupId, newMessages => {
            this.setState({ messages: newMessages })
        })
    }
    scrollToBottom = () => {
        const element = ReactDOM.findDOMNode(this.bottomMostNodeToScrollInto)
        element.scrollIntoView()
    }
    renderMessages = (message) => {
        switch (message.type) {
            case db.messageTypes.TEXT:
            case db.messageTypes.FILE:
                const { user } = this.props
                const isOwned = user && message.from.id === user.id
                return <Message
                    key={message.id}
                    message={message}
                    isOwned={isOwned}
                />
            default:
                return <div key={message.id}></div>
        }
    }
    render() {
        return (
            <div className={styles.container}>
                {this.state.messages.map(this.renderMessages)}
                <div ref={node => this.bottomMostNodeToScrollInto = node}></div>
            </div>
        )
    }
}