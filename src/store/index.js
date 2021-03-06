import Vue from 'vue';
import Vuex from 'vuex';
import * as firebase from 'firebase'


Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://cdn.pixabay.com/photo/2015/12/15/06/32/new-york-1093744_960_720.jpg',
        id: 'sdfgdfgdsfgdsf',
        title: 'Meetup in NY',
        date: '2018-12-18',
        location: 'New York',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolorem est iusto natus sit tempore. Autem corporis eligendi et explicabo incidunt libero pariatur repellat, veniam voluptas? Amet aut autem, expedita explicabo minima natus odio placeat praesentium quasi suscipit tenetur vero.'
      },
      {
        imageUrl: 'https://c1.staticflickr.com/9/8233/8586789587_c5f7ac6079_b.jpg',
        id: 'sdfgdsdfsdfgdsfgdsf',
        title: 'Meetup in Paris',
        date: '2018-11-15',
        location: 'Paris',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque dolorem est iusto natus sit tempore. Autem corporis eligendi et explicabo incidunt libero pariatur repellat, veniam voluptas? Amet aut autem, expedita explicabo minima natus odio placeat praesentium quasi suscipit tenetur vero.'
      },
    ],
    user: null,
    loading: false,
    error: null
  },
  mutations: {
    createMeetup(state, meetup) {
      state.loadedMeetups.push(meetup);
    },
    setUser(state, payload) {
      state.user = payload
    },
    setLoading(state, payload) {
      state.loading = payload
    },
    setError(state, payload) {
      state.error = payload
    },
    clearError(state) {
      state.error = null
    }
  },
  actions: {
    clearError({commit}) {
      commit('clearError');
    },
    createMeetup({commit}, payload) {
      const meetup = {
        id: makeid(),
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date
      }
      commit('createMeetup', meetup);
    },
    signUserUp({commit}, payload){
      commit('setLoading', true);
      commit('clearError');
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false);
            console.log(user.user);
            const newUser = {
              id: user.user.uid,
              registeredMeetups:[]
            }
            commit('setUser', newUser);
          }
        )
        .catch(
          error=>{
            commit('setLoading', false);
            commit('setError', error);
            console.log(error);
          }
        )
    },
    signUserIn({commit}, payload){
      commit('setLoading', true);
      commit('clearError');
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          user => {
            commit('setLoading', false);
            console.log(user.user);
            const newUser = {
              id: user.user.uid,
              registeredMeetups: []
            }
            commit('setUser', newUser);
          }
        )
        .catch(
          error=>{
            commit('setLoading', false);
            commit('setError', error);
            console.log(error);
          }
        )
    }
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      });
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0,5);
    },
    loadedMeetup(state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup)=>{
          return meetup.id === meetupId;
        });
      }
    },
    user(state) {
      return state.user
    },
    error(state) {
      return state.error
    },
    loading(state) {
      return state.loading
    }
  }
});

function makeid() {
  let text = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

function randomDate() {
  let start = new Date();
  let end = new Date(2019,11,30);
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

