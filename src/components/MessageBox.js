import React from 'react';

class MessageBox extends React.Component {
    constructor(props){
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onKeyup = this.onKeyup.bind(this);
        this.state = {
          message: '',
          id: this.parseDocumentCookie(document.cookie).uid
        };
    }
  
    parseDocumentCookie = (documentCookie) => {    
        if (documentCookie === "") return {}
        const cookiesInString = documentCookie.split('; ')
        const cookies = {}
        cookiesInString.forEach(cookie => {
            const separatorIdx = cookie.indexOf('=')
            const firstHalf = cookie.slice(0, separatorIdx)
            const secondHalf = cookie.slice(separatorIdx + 1)
            cookies[firstHalf] = secondHalf
        })
        return cookies
    }
    trim(message){
        return message.slice(0, message.length - 1)
    }
    onChange(event){
        this.setState({
          message: event.target.value
        });
    }

    onKeyup(event){ 
        if(event.keyCode === 13 && this.trim(event.target.value) !== ''){
          event.preventDefault();
          this.props.db.pushMessage({
            id: this.state.id,
            message: this.trim(event.target.value)
          });
          this.setState({
            message: ''
          });
        }
    }

    render() {
        return (
          <form>
            <textarea
                className="textarea"
                placeholder="Type a message"
                cols="50"
                onChange={this.onChange}
                onKeyUp={this.onKeyup}
                value={this.state.message}>
              </textarea>
          </form>
        )
    }
}

export default MessageBox