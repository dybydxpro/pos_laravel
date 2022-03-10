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

    searchUser(name){
        return http.get(`/user/searchUser/${name}`)
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

    searchItemsByName(name){ 
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

    editStock(data){ 
        return http.put("/stock/edit", data);
    }

    searchStockByItemID(id){ 
        return http.get(`/stock/searchByItemID/${id}`);
    }

    searchStockByName(name){ 
        return http.get(`/stock/searchStockByName/${name}`);
    }

    getAllStockQtyByID(id){
        return http.get(`/stock/getAllStockQtyByID/${id}`);
    }

    stockByID(search){
        return http.get(`/stock/stockByID/${search}`)
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

    searchGRN(search){
        return http.get(`/grn/searchGRN/${search}`);
    }

    //Bill Cart functions
    getCartItems(id){
        return http.get(`/cart/getCartByName/${id}`);
    }

    addCartItems(data){
        return http.post("/cart/addDataToCart", data);
    }

    deleteCartItem(id){
        return http.get(`/cart/deleteCartItem/${id}`);   // this is a delete method.
    }

    //Bill HoleSaleCart functions
    getHSCartItems(id){
        return http.get(`/holesalecart/getHSCartByName/${id}`);
    }

    addHSCartItems(data){
        return http.post("/holesalecart/addDataToHSCart", data);
    }

    deleteHSCartItem(id){
        return http.get(`/holesalecart/deleteHSCartItem/${id}`);   // this is a delete method.
    }

    //Print Bill functions

    fetchAllBillItems(){
        return http.get('/sale/fetchAllBillItems/'); 
    }

    fetchAllBillItemsByBillID(id){
        return http.get(`/sale/fetchAllBillItemsByBillID/${id}`); 
    }

    sellBillItems(id){
        return http.get(`/sale/sellBillItems/${id}`); 
    }

    saleBillFetch(id){
        return http.get(`/sale/billFetch/${id}`);
    }

    downloadSaleBill(id){
        return http.get(`/sale/downloadBill/${id}`);
    }



    fetchAllHSBillItems(){
        return http.get('/holesale/fetchAllBillItems/'); 
    }

    fetchAllHSBillItemsByBillID(id){
        return http.get(`/holesale/fetchAllBillItemsByBillID/${id}`); 
    }

    holesellBillItems(id){
        return http.get(`/holesale/sellBillItems/${id}`); 
    }

    holesaleBillFetch(id){
        return http.get(`/holesale/billFetch/${id}`);
    }

    downloadHoleSaleBill(id){
        return http.get(`/holesale/downloadBill/${id}`);
    }

    //Dashboard functions
    lessStock(){
        return http.get('/dashboard/lessStock');
    }

    topSellItem(){
        return http.get('/dashboard/topSellItem');
    }

    topHSSellItem(){
        return http.get('/dashboard/topHSSellItem');
    }

    chartData(){
        return http.get('/dashboard/chartData');
    }

    dailyChartData(){
        return http.get('/dashboard/dailyChartData');
    }

    holesaleChartData(){
        return http.get('/dashboard/holesaleChartData');
    }

    holesaleDailyChartData(){
        return http.get('/dashboard/holesaleDailyChartData');
    }
}

export default new Service();