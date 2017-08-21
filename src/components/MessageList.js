import React from 'react'
import Message from './Message'
class MessageList extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            messages: []
        }
        this.getData = this.getData.bind(this)
        this.props.db.getMessage(this.getData)
    }

    getData(values){
        if (values != null){
            const messages = Object.entries(values).map(values => {
                return values[1]
            })
            this.setState({messages : messages})
        }
    }
    render(){
        const messageNodes = this.state.messages.map((message) => {
            return (
              <div className="card">
                <div className="card-content">
                  <Message message = {message} />
                </div>
              </div>
            )
          });
          return (
            <div>
              {messageNodes}
            </div>
          );
        }
    }

export default MessageList