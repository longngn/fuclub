import React from 'react'
import Avatar from 'material-ui/Avatar'
import * as MessageContent from './MessageContent';
import styles from './Message.css'

import { messageTypes } from '../services/db';

export default ({ message, isOwned }) => {
    let messageContent 
    switch (message.type) {
        case messageTypes.TEXT:
            messageContent = <MessageContent.Text isOwned={isOwned}>{message.content}</MessageContent.Text>
            break
        case messageTypes.FILE:
            messageContent = <MessageContent.File isOwned={isOwned} file={message.content} />
            break
        default:
            messageContent = <div>{`Undefined message type: ${message.type}`}</div>
    }

    const senderProfile = `https://fb.com/${message.from.id}`
    return isOwned ? (
        <div className={styles.ownedContainer}>
            <div className={styles.ownedMessage}>
                {messageContent}
            </div>
        </div>
    ) : (
        <div className={styles.unownedContainer}>
            <a href={senderProfile}>
                <Avatar src={message.from.avatar} />
            </a>
            <div className={styles.unownedMessage}>
                <p className={styles.userName}>{message.from.name}</p>
                {messageContent}
            </div>
        </div>
    )
}