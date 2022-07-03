import {
  getItem,
  setItem,
  removeItem,
} from "./../services/localStorageService";
import authHeader from "./../services/AuthHeaderService";
import axios from "axios";
import AuthService from "./../services/AuthenticationService";

export const auth = {
  namespaced: true,
  state: {
    loggedIn: false,
    user: getItem("user"),
    token: getItem("token"),
    refreshToken: getItem("refreshToken"),
  },
  getters: {
    token: (state) => state.token,
    user: (state) => state.user,
    refreshToken: (state) => state.refreshToken,
  },
  mutations: {
    saveToken(state, payload) {
      state.token = payload.token;
      setItem("token", payload.token);
    },
    saveRefreshToken(state, refreshToken) {
      state.refreshToken = refreshToken;
      setItem("refreshToken", refreshToken);
    },
    fetchUser(state, { user }) {
      state.user = user;
      setItem("user", JSON.stringify(user).toString());
    },

    loginFailure(state) {
      state.loggedIn = false;
      state.user = null;
      removeItem("token");
    },
    loginSuccess(state, user) {
      state.loggedIn = true;
      state.user = user;
      setItem("user", user);
    },
    logout(state) {
      state.user = null;
      state.token = null;
      removeItem("token");
      removeItem("refreshToken");
    },
  },
  actions: {
    login({ commit }, payload) {
      return AuthService.login(payload).then(
        (res) => {
            console.log(res.token)
          commit("saveToken", {
            token: res.token,
          });
          commit("saveRefreshToken", {
            token: res.refreshToken,
          });
          return Promise.resolve(res);
        },
        (error) => {
          commit("loginFailure");
          return Promise.reject(error);
        }
      );
    },

    async fetchUser({ commit }) {
      const response = await axios.get("/api/Setup/GetCurrentUser", {
        headers: authHeader(),
      });

      console.log(response,authHeader())
      commit("fetchUser", { user: response.data });
    },
  },
};
