import firebaseApp from './firebase'

const database = firebaseApp.database()
const usersRef = database.ref('users')

export const getUser = async (uid) => {
    const snapshot = await usersRef.child(uid).once('value')
    return snapshot.val()
}
export const updateUser = (user) => {
    usersRef.update({
        [user.id]: user
    })
}