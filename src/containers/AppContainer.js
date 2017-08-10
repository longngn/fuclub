import React from 'react'
import App from './App'

export default class AppContainer extends React.Component {
    state = {
        uid: '',
        accessToken: ''
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
    isTokenValid = async (token) => {
        const response = await fetch(`https://graph.facebook.com/v2.10/me?access_token=${token}`)
        const json = await response.json()
        return !json.error
    }
    componentDidMount() {
        const checkerID = setInterval(async () => {
            const cookies = this.parseDocumentCookie(document.cookie)
            const validToken = cookies.accessToken? await this.isTokenValid(cookies.accessToken) : null
            if (cookies.accessToken && validToken) {
                this.setState({ uid: cookies.uid, accessToken: cookies.accessToken })
                clearInterval(checkerID)
            }
        }, 1000)
    }
    render() {
        const state = this.state
        return state.uid? 
            <App uid={state.uid} accessToken={state.accessToken} /> :
            null
    }
}