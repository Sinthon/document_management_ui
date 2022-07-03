import axios from "axios";

class AuthenticationService {
    async login(user) {
        const response = await axios.post(`/api/AuthManagement/Login`, user, {
            withCredentials: true
        });
        return response.data;
    }
}
export default new AuthenticationService();