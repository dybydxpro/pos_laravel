import React from 'react';
import Services from "../../../Services";

class BillAdd extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            item: [],
            stock: [],
            data:[],
            billList:[],
            stockValue:[],
        }
    }

    async componentDidMount() {
        Services.getAllItems().then(({data})=>{
            this.setState({item: data});
            console.log(data);
        })

        Services.getAllStock().then(({data})=>{
            this.setState({stock: data});
            console.log(data);
        })

        var id = sessionStorage.getItem("userID");
        Services.getHSCartItems(id).then(({data})=>{
            this.setState({billList: data});
            console.log(data);
        })    

        const newData = {...this.state.data};
        newData["checkBox"] = false;
        newData["discount"] = 0;
        newData["paybleValue"] = 0;
        newData["price"] = 0;
        this.setState({data: newData});
        console.log(newData);
    }

    async handleData(e){
        const newData = {...this.state.data};
        newData[e.target.id] = e.target.value;
        newData["userID"] = sessionStorage.getItem("userID");
        this.setState({data: newData});
        console.log(newData);
    }

    async searchHandle(e){
        var search="";
        search = e.target.value;
        console.log(search);
        if(search==""){
            Services.getAllItems().then(({data})=>{
                this.setState({item: data});
                console.log(data);
            })
        }
        else{
            Services.searchItemsByName(search).then(({data})=>{
                this.setState({item: data});
                console.log(data);
            })
        }
    }

    async selectItem(e){
        var search="";
        search = e.target.value;
        console.log(search);
        if(search==""){
            Services.getAllStock().then(({data})=>{
                this.setState({stock: data});
                console.log(data);
            })
        }
        else{
            Services.searchStockByItemID(search).then(({data})=>{
                this.setState({stock: data});
                console.log(data);
            })
            //Get data to data
            /*Services.getByID(search).then(({data})=>{
                console.log(data);
                this.setState({data: data});
            }).catch(({response})=>{ console.log(response); })*/
        }
    }

    async selectStock(e){
        var search="";
        search = e.target.value;
        console.log(search);
        Services.stockByID(search).then(({data})=>{
            this.setState({stockValue: data});
            console.log(data);
        })
    }

    async checkBox(e){
        const newData = {...this.state.data};
        newData[e.target.id] = e.target.checked;
        this.setState({data: newData});
        console.log(newData);
    }

    async refreshPage() {
        window.location.reload(false);
    }

    async adaToDatabase(e){
        e.preventDefault();
        await Services.addHSCartItems(this.state.data)
        .then(({data})=>{
          console.log(data);
          this.refreshPage();
        }).catch(({response})=>{
          console.log(response);
        })
    }

    async PrintBill(){
        var id = sessionStorage.getItem("userID");
        Services.holesellBillItems(id)
        .then(({data})=>{
          console.log(data);
          window.location.replace("/admin/holesale/printbill/"+data);
        }).catch(({response})=>{
          console.log(response);
        })
    }

    render() {
        const {item} = this.state;
        const {stock} = this.state;
        const {billList} = this.state;
        const {data} = this.state;
        const {stockValue} = this.state;

        const deleteCartItem = async (id) => {
            await Services.deleteHSCartItem(id).then(({data})=>{
                console.log(data);
                this.componentDidMount();
              }).catch(({response:{data}})=>{
                console.log(data);
              })
        }

        function tableDataFetch(){
            if(billList.length == 0 || billList === undefined){
                return(
                    <tr>
                        <th colSpan={7} className="text-center"> No data</th>
                    </tr>
                )
            }
            else{
                return(
                    billList.map((data) =>
                        <tr key={data.cartID}>
                            <td className="text-center">{data.itemID}</td>
                            <td className="text-center">{data.stockID}</td>
                            <td>{data.item}</td>
                            <td className="text-center">{data.unit}</td>
                            <td className="text-end">{data.cartQty.toFixed(2)}</td>
                            <td className="text-end">{data.cartPrice.toFixed(2)}</td>
                            <td className="text-end">{data.sellPrice.toFixed(2)}</td>
                            <td className="text-center">
                                <button type="button" className="btn btn-danger me-2" onClick={()=>deleteCartItem(data.cartID)}> Delete </button>
                            </td>
                        </tr>
                    )
                )
            }   
        }

        function totalOfBill(){
            var total = 0;
            for(var a = 0; a < billList.length; ++a){
                total = total + billList[a].cartPrice;
            }
            return total;
        }

        function totalOfPaybleBill(){
            var total = 0;
            for(var a = 0; a < billList.length; ++a){
                total = total + billList[a].sellPrice;
            }
            return total;
        }

        return (
            <div className="container">
                <div className="detailBox">
                    <h1 className='h1 d-flex justify-content-center'>Add New Bill.</h1>
                    <form onSubmit={(e) => this.adaToDatabase(e)}>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control" onChange={(e) => this.searchHandle(e)} id="search" placeholder="Search"/>
                            <label htmlFor="search">Search</label>
                        </div>
                        <div className="form-floating mb-3">
                            <select className="form-select form-select mb-3" onChange={(e) => {this.selectItem(e); this.handleData(e)}} id="itemID" required>
                                <option value=""></option>
                                {   
                                    item.map(datas => <option key={datas.itemID} value={datas.itemID}>{datas.item}</option> )
                                }
                            </select>
                            <label htmlFor="item">Item</label>
                        </div>
                        <div className="form-floating mb-3">
                            <select className="form-select form-select mb-3" onChange={(e) => {this.handleData(e); this.selectStock(e)}} id="stockID" required>
                                <option value=""></option>
                                {   
                                    stock.map(stocks => <option key={stocks.stockID} value={stocks.stockID}>{stocks.holesaleretail_price}</option> )
                                }
                            </select>
                            <label htmlFor="stock">Stock Price</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" onChange={(e) => this.handleData(e)} id="cartQty" placeholder="Qty" required/>
                            <label htmlFor="cartQty">Qty</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="number" className="form-control" value={data.cartQty * stockValue.holesaleretail_price} onChange={(e) => this.handleData(e)} id="price" placeholder="Price" required/>
                            <label htmlFor="price">Price</label>
                        </div>
                        <div className="mb-3">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="1" onChange={(e) => this.checkBox(e)} value="" id="checkBox"/>
                                <label className="form-check-label" htmlFor="checkeBox"> Discount in persentage (%) </label>
                            </div>
                            <div className="form-floating">
                                <input type="number" className="form-control" value={data.discount} onChange={(e) => this.handleData(e)} id="discount" placeholder="Discount" required/>
                                <label htmlFor="discount">Discount</label>
                            </div>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="hidden" className="form-control" value={data.paybleValue} id="paybleValue" placeholder="Payble Price" required/>
                            <label htmlFor="paybleValue"></label>
                        </div>
                        <br/>
                        <button type='submit' className='btn btn-primary'><i class="bi bi-plus-circle"></i> &nbsp; Add to Bill</button>
                    </form>
                </div>  
                <hr />
                <br />
                <div className="">
                    <table className="table">
                        <thead className="table-dark">
                            <tr className="text-center">
                                <th scope="col" width="100px">Item ID</th>
                                <th scope="col" width="100px">Stock ID</th>
                                <th scope="col">Item Name</th>
                                <th scope="col" width="150px">Unit</th>
                                <th scope="col" width="150px">Qty</th>
                                <th scope="col" width="150px">Price</th>
                                <th scope="col" width="150px">Payble Price</th>
                                <th scope="col" width="150px">Options</th>
                            </tr>
                        </thead>
                        <tbody>
                            { tableDataFetch() }
                        </tbody>
                        <tfoot>
                            <tr className="text-center table-active">
                                <th scope="col" width="100px">No. of Items: </th>
                                <th scope="col" width="100px">{billList.length}</th>
                                <th scope="col"></th>
                                <th scope="col" width="150px"></th>
                                <th scope="col" width="150px">Total (Rs.):</th>
                                <th scope="col" width="150px" className="text-end">{ totalOfBill().toFixed(2) }</th>
                                <th scope="col" width="150px" className="text-end">{ totalOfPaybleBill().toFixed(2) }</th>
                                <th scope="col" width="150px"></th>
                            </tr>
                        </tfoot>
                    </table>
                    <br />
                    <form>
                        <div className='d-flex justify-content-end'>
                            <button class="btn btn-secondary btn-lg" onClick={ () => this.PrintBill()} type="button"><i class="bi bi-printer"></i> &nbsp;Print Bill</button>
                        </div>
                    </form>
                    <br /><br />
                </div>
            </div>
        );  
    }
}

export default BillAdd;