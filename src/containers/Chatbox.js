import React from 'react'
import * as db from '../services/db'
import MessageList from '../components/MessageList'
import MessageBox from '../components/MessageBox'

export default class Chatbox extends React.Component {
    render(){
        return(
            <div>
                <div>
                    <h2> Chatbox </h2>
                </div>
                <div>
                    <MessageList db={db}/>
                </div>
                <div>
                    <MessageBox db={db}/>
                </div>
            </div>
        )
    }
}