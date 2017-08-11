import * as firebase from 'firebase'

const config = {
    apiKey: "AIzaSyA9Q6SlxAVvFgAeYw7j0XgeKYw7qo2vKUI",
    authDomain: "fucm-338ac.firebaseapp.com",
    databaseURL: "https://fucm-338ac.firebaseio.com",
    projectId: "fucm-338ac",
    storageBucket: "fucm-338ac.appspot.com",
    messagingSenderId: "829044054793"
}

export default firebase.initializeApp(config)