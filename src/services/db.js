import firebaseApp from './firebase'

const database = firebaseApp.database()
const usersRef = database.ref('users')
const groupsRef = database.ref('groups')

export const addMessage = async (groupId, messageObject) => {
    if (!content) return // if message is an empty string
    if (!/\S/.test(content)) return // if message contains only whitespaces
    
    const key = messagesRef.push().key
    const timestamp = firebase.database.ServerValue.TIMESTAMP
    messagesRef.update({
        [key]: {
            id: key,
            type,
            content,
            senderId,
            timestamp
        }
    })
}
export const makeMessage = (type, content, user) => {
    if (!content) return // if message is an empty string
    if (!/\S/.test(content)) return // if message contains only whitespaces
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
