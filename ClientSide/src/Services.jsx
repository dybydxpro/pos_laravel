import http from "./http-common";

class Service {
    login(data) {
        return http.post("/login", data);
    }
}

export default new Service();