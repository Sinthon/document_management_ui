import store from "../store"

export default async (to, from, next) => {
    if (!store.getters['auth/user']) {
        try {
            await store.dispatch('auth/fetchUser')
        } catch (e) {
            console.log(e)
        }
    }
    next()
}