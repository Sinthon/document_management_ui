export const loading = {
  state:{
      isLoading : false,
  },

  getters: {
      loadingState: (state) => state.isLoading
  },
  
  mutations:{
      setLoadingState(state, payload) {
          state.isLoading = payload.value;
      },
  }
}