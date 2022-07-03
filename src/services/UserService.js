import axios from "axios";
import authHeader from "./AuthHeaderService";

export default class UserService {
  async getUsers() {
    const response = await axios
      .get(`/api/Setup/GetAllUsers`, {
        headers: authHeader(),
      })
      .catch((error) => {
        return error.response;
      });
    return await response;
  }
  async getUser(email) {
    const response = await axios
      .get(`/api/Setup/GetAllUsers/?email=${email}`, {
        headers: authHeader(),
      })
      .catch((error) => {
        return error.response;
      });
    return await response;
  }
}
