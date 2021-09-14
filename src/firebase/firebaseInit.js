import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAp7I5Uhpp1fxMil1hKtGVfd9rv2XnQh4Q',

  authDomain: 'fireblogsvue-4d56e.firebaseapp.com',

  projectId: 'fireblogsvue-4d56e',

  storageBucket: 'fireblogsvue-4d56e.appspot.com',

  messagingSenderId: '118434465456',

  appId: '1:118434465456:web:328c30cbbc0d9964585d75'
}

const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { timestamp }
export default firebaseApp.firestore()
