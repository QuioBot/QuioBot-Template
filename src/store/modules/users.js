import axios from 'axios';

const state = {
  user: null,
};

const getters = {
  isAuthenticated: state => !!state.user,
  stateUser: state => state.user,
};

const actions = {
  async register({dispatch},form) {
    await axios.post('user', form);
    let UserForm = new FormData();
    UserForm.append('username', form.email);
    UserForm.append('password', form.password);
    await dispatch('logIn', UserForm);
    // let {data} = await axios.post('user', form);
    // await commit('setUser', data.name);
  },
  async logIn({commit},user) {
    await axios.post('login', user);
    let {data} = await axios.post('login', user);
    await commit('setUser', data.username);
  },

//   eslint-disable-next-line no-empty-pattern
  async deleteUser({}, id) {
    await axios.delete(`user/${id}`);
  },
  async logOut({commit}) {
    let user = null;
    commit('logout', user);
  }
};

const mutations = {
  setUser(state, username) {
    state.user = username;
  },
  logout(state, user){
    state.user = user;
  },
};

export default {
  state,
  getters,
  actions,
  mutations
};