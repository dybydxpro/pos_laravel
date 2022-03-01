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

    createNewUser(data){
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

    searchItemsByName(name){ //Not functional
        return http.get(`/item/searchByName/${name}`);
    }

    getItemsSearch(){
        return http.get("/item/forsele");
    }

    //Stocks
    getAllStock(){
        return http.get("/stock");
    }

    stockGetByID(id){
        return http.get(`/stock/${id}`);
    }

    createStock(data){
        return http.post("/stock/add", data);
    }

    editStock(data){ //Not functional
        return http.put("/stock/edit", data);
    }

    searchStockByItemID(id){ //Not functional
        return http.get(`/stock/searchByItemID/${id}`);
    }

    //Good Receiving Note
    getAllGRN(){
        return http.get("/grn");
    }

    grnGetByID(id){
        return http.get(`/grn/${id}`);
    }

    createGRN(data){
        return http.post("/grn/add", data);
    }

    editGRN(data){ 
        return http.put("/grn/edit", data);
    }
}

export default new Service();