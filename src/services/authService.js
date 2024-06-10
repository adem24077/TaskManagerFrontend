import axiosInstance from "../core/utils/interceptors/axiosInterceptors";

class AuthService {
  constructor() {
    this.apiUrl = "auth";
  }
  async userRegister(request) {
    return await axiosInstance.post(this.apiUrl + "/register", request);
  }

  async login(request) {
    return await axiosInstance.post(this.apiUrl + "/login", request);
  }
}

export default new AuthService();
