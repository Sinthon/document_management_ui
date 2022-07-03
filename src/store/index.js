import { createStore } from "vuex";

import { auth } from './auth.module'
import { loading } from './loading.module'

const store = createStore({
    modules: {
        auth,
        loading
    }
});

export default store;