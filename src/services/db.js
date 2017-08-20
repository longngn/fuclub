import firebaseApp from './firebase'

const database = firebaseApp.database()
const usersRef = database.ref('users')
const groupsRef = database.ref('groups')

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