import firebase from 'firebase'
import firebaseApp from './firebase'

const database = firebaseApp.database()
const usersRef = database.ref('users')
const groupsRef = database.ref('groups')
const getMessagesRef = (groupId) => database.ref('messages').child(groupId)

export const messageTypes = {
    TEXT: 'TEXT',
    FILE: 'FILE'
}
export const addMessage = async (groupId, messageObject) => {
    const messagesRef = getMessagesRef(groupId)
    const key = messagesRef.push().key
    const timestamp = firebase.database.ServerValue.TIMESTAMP
    messagesRef.update({
        [key]: {
            ...messageObject,
            id: key,
            timestamp
        }
    })
}
export const makeMessage = (type, content, user) => {
    if (!content) return null // if message is an empty string
    if (!/\S/.test(content)) return null // if message contains only whitespaces
    return {
        type,
        content,
        from: {
            id: user.id,
            name: user.name,
            avatar: user.avatar
        }
    }
}
export const onMessagesDataChange = (groupId, handler) => {
    const visibleMessagesRef = getMessagesRef(groupId).orderByChild('timestamp').limitToLast(100)
    return visibleMessagesRef.on('value', snapshot => {
        const messages = []
        snapshot.forEach(messageSnapshot => { messages.push(messageSnapshot.val()) })
        handler(messages)
    })
}
export const offMessagesDataChange = (groupId, onFunction) => {
    const visibleMessagesRef = getMessagesRef(groupId).orderByChild('timestamp').limitToLast(100)
    visibleMessagesRef.off('value', onFunction)
}

export const onUserChange = (id, handler) => {
    usersRef.child(id).on('value', snapshot => handler(snapshot.val()))
}
export const getUser = async (uid) => {
    const snapshot = await usersRef.child(uid).once('value')
    return snapshot.val()
}
export const updateUser = (user) => {
    usersRef.update({
        [user.id]: user
    })
}

export const onGroupChange = (id, handler) => {
    groupsRef.child(id).on('value', snapshot => handler(snapshot.val()))
}
export const getGroup = async (id) => {
    const snapshot = await groupsRef.child(id).once('value')
    return snapshot.val()
}
export const updateGroup = (group) => {
    groupsRef.update({
        [group.id]: group
    })
}
