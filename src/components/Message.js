import React from 'react'

class Message extends React.Component {
    render(){
        return(
            <div>
                {this.props.message}
            </div>
        )
    }
}

export default Message