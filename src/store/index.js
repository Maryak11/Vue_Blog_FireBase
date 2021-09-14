import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebase/firebaseInit'
import firebase from 'firebase/app'
import 'firebase/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    simpleBlogCards: [
      {
        blogTitle: 'Blog Card #1',
        blogCoverPhoto: 'stock-1',
        blogDate: 'May1, 2021'
      },
      {
        blogTitle: 'Blog Card #1',
        blogCoverPhoto: 'stock-2',
        blogDate: 'May1, 2021'
      },
      {
        blogTitle: 'Blog Card #1',
        blogCoverPhoto: 'stock-3',
        blogDate: 'May1, 2021'
      },
      {
        blogTitle: 'Blog Card #1',
        blogCoverPhoto: 'stock-4',
        blogDate: 'May1, 2021'
      }
    ],
    editPost: null,
    user: null,
    profileEmail: null,
    profileFirstName: null,
    profileLastName: null,
    profileUserName: null,
    profileId: null,
    profileInitials: null
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload
    },
    updateUser(state, payload) {
      state.user = payload
    },
    setProfileInfo(state, doc) {
      state.profileId = doc.id
      state.profileEmail = doc.data().email
      state.profileFirstName = doc.data().firstName
      state.profileUserName = doc.data().userName
      state.profileLastName = doc.data().lastName
    },
    setProfileInitials(state) {
      state.profileInitials =
        state.profileFirstName.match(/(\b\S)?/g).join('') +
        state.profileLastName.match(/(\b\S)?/g).join('')
    }
  },
  actions: {
    async getCurrentUser({ commit }) {
      const dataBase = await db
        .collection('users')
        .doc(firebase.auth().currentUser.uid)
      const dbResults = await dataBase.get()
      commit('setProfileInfo', dbResults)
      commit('setProfileInitials')
      console.log(dbResults.data())
    }
  },
  modules: {}
})
