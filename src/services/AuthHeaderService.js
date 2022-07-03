import store from "../store";

export default function authHeader() {
    const token = store.getters["auth/token"];
    if (token) {
        return {
            Authorization: "Bearer " + token,
            "Content-Type":
                "multipart/form-data; charset=utf-8; boundary=" +
                Math.random().toString().substr(2),
        };
    } else {
        return {};
    }
}