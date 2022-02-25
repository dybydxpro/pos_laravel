import http from "./http-common";

class Service {
    //User
    getAllUser(){
        return http.get("/user");
    }

    userGetByID(id){
        return http.get(`/user/${id}`);
    }

    login(data) {
        return http.post("/user/login", data);
    }

    createNew(data){
        return http.post("/user/create", data);
    }

    updateUser(data){
        return http.put("/user/edit", data)
    }

    resetPassword(data){
        return http.put("/user/resetpassword", data)
    }

    //Items
    getAllItems() {
        return http.get("/item");
    }

    getByID(id){
        return http.get(`/item/${id}`);
    }
    
    addItems(data){
        return http.post("/item/add", data);
    }

    editItems(data){
        return http.put("/item/edit/", data);
    }
}

export default new Service();