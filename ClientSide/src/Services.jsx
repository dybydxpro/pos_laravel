import http from "./http-common";

class Service {
    userLogin(data) {
        return http.post("/user/login", data);
    }

    userSignup(data) {
        return http.post("/user/signup", data);
    }
}

export default new Service();