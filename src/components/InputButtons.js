import React from 'react'
import ReactDOM from 'react-dom'
import IconButton from 'material-ui/IconButton'
import styles from './InputButtons.css'
import { colors } from '../config'

export default ({ onSend, onFileSelected, onLogOut }) => {
    let fileInputNode
    const handleFileInput = (e) => {
        const file = e.target.files[0]
        if (file) onFileSelected(file)
        fileInputNode.value = ''
    }

    return (
        <div className={styles.container}>
            <input 
                type='file'
                ref={node => fileInputNode = node}
                onChange={handleFileInput}
                style={{ display: 'none' }}
            />
            <IconButton
                iconClassName='fa fa-paperclip'
                iconStyle={{ color: colors.ownedMessage }}
                tooltip='Upload image or file'
                touch={true}
                onClick={() => {
                    const element = ReactDOM.findDOMNode(fileInputNode)
                    element.click()
                }}
                tooltipPosition='top-center'
            />
            <IconButton 
                iconClassName='fa fa-paper-plane-o'
                iconStyle={{ color: colors.ownedMessage }}
                tooltip='Send message'
                touch={true}
                onClick={onSend}
                tooltipPosition='top-center'
            />
        </div>
    )
}