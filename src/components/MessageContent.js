import React from 'react'
import MessageBubble from './MessageBubble'
import styles from './MessageBubble.css'
import { colors } from '../config'

export const Text = ({ children, isOwned, isFile }) => isOwned?
    <MessageBubble 
        backgroundColor={colors.ownedMessage}
        color='#fff'
        isOwned={isOwned}
        isFile={isFile}
    >{children}</MessageBubble> :
    <MessageBubble 
        backgroundColor={colors.unownedMessage}
        color='#000'
        isOwned={isOwned}
        isFile={isFile}
    >{children}</MessageBubble>

export const File = ({ isOwned, file }) => {
    const { type, downloadURL: URL } = file
    if (type.startsWith('image')) return (
        <a href={URL} target='_blank'>
            <img className={styles.image} src={URL} alt={file.name}/>
        </a>
    ); else if (type.startsWith('audio')) return (
        <audio src={URL} controls style={{ width: '500px' }}>
            Your browser does not support embedded audios, but you can <a href={URL}>download it</a>
        </audio>
    ); else if (type.startsWith('video')) return (
        <video src={URL} controls height='240px'>
            Your browser does not support embedded videos, but you can <a href={URL}>download it</a>
        </video>            
    ); else return (
        <Text isOwned={isOwned} isFile={true}>
            <a href={URL}>
                <i className='fa fa-cloud-download'></i>
                {' '}
                {file.name}
            </a>
        </Text>
    )
}