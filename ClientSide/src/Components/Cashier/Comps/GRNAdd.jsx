import React, { useState } from "react";  
import Services from "../../../Services";
import "../../../CSS/General.css";
import { useNavigate, /*Link*/ } from 'react-router-dom';

class GRNAdd extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            item: [],
            stock: [],
            data:[],
        }
    }
    //navigate = useNavigate();
    /*const [item, setItem] = useState({
        id: 0,
        item: " ",
        unit: " ",
        createrID: 0,
    });
    const [stock, setStock] = useState({ });
    const [data, setData] = useState({ });
    var { searchForItem } = useState({});*/

    async componentDidMount() {
        Services.getAllItems().then(({data})=>{
            this.setState({item: data});
            console.log(data);
        })

        Services.getAllStock().then(({data})=>{
            this.setState({stock: data});
            console.log(data);
        })
    }

    async handle(e){
        const newData = {...this.state.data};
        newData[e.target.id] = e.target.value;
        newData["grnRecorderID"] = sessionStorage.getItem("userID");
        this.setState({data: newData});
        console.log(newData);
    }

    async refreshPage() {
        window.location.reload(false);
    }

    createGRN = async(e) => {
        e.preventDefault();
        await Services.createGRN(this.state.data)
        .then(({data})=>{
          console.log(data);
          this.refreshPage();
          //navigate("/admin/grn");
        }).catch(({response})=>{
          console.log(response);
        })
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
        }
    }

    render(){
        const {item} = this.state;
        const {stock} = this.state;
        //const {data} = this.state;
        return(
            <div className="container-fluid">
                <div className="detailBoxXL shadow bg-body rounded">
                    <h1 className='h1 d-flex justify-content-center'>New Good Receiving Note.</h1>
                    <br/>
                    <form onSubmit={ (e)=>this.createGRN(e) }>
                        <div className="row row-cols-2">
                            <div className="form-floating mb-3 ">
                                <input type="date" className="form-control" id="grnDate" onChange={(e) => this.handle(e)} placeholder="GRN Date" required/>
                                <label htmlFor="grnDate">&nbsp;&nbsp;GRN Date</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="date" className="form-control" id="invoiceDate" onChange={(e) => this.handle(e)} placeholder="Invoice Date" required/>
                                <label htmlFor="invoiceDate">&nbsp;&nbsp;Invoice Date</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="invoiceNo" onChange={(e) => this.handle(e)} placeholder="Invoice Number" required/>
                                <label htmlFor="invoiceNo">&nbsp;&nbsp;Invoice Number</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" id="supplier" onChange={(e) => this.handle(e)} placeholder="Supplier" required/>
                                <label htmlFor="supplier">&nbsp;&nbsp;Supplier</label>
                            </div>
                        </div>
                        <div className="row row-cols-3">
                            <div className="form-floating mb-3 ">
                                <input type="text" className="form-control" id="search" onChange={(e) => this.searchHandle(e)} placeholder="Item ID" required/>
                                <label htmlFor="search">&nbsp;&nbsp;Search</label>
                            </div>
                            <div className="form-floating mb-3 ">
                                <select className="form-select form-select mb-3" onChange={(e) => {this.selectItem(e); this.handle(e)}} id="itemID" required>
                                    <option value=""></option>
                                    {   
                                        item.map(items => <option key={items.itemID} value={items.itemID}>{items.item}</option> )
                                    }
                                </select>
                                <label htmlFor="itemID">&nbsp;&nbsp;Items</label>
                            </div>
                        </div>
                        <div className="row row-cols-3">
                            <div className="form-floating mb-3 ">
                            </div>
                            <div className="form-floating mb-3 ">
                                <select className="form-select form-select mb-3" onChange={(e) => this.handle(e)} id="stockID" required>
                                    <option value=""></option>
                                    {   
                                        stock.map(stocks => <option key={stocks.stockID} value={stocks.stockID}>{stocks.holesale_price}</option> )
                                    }
                                </select>
                                <label htmlFor="stockID">&nbsp;&nbsp;Unit Price (Rs.)</label>
                            </div>
                        </div>
                        <div className="row row-cols-3">
                            <div className="form-floating mb-3 ">
                                <input type="text" className="form-control" id="grnQty" onChange={(e) => this.handle(e)} placeholder="QTY of Item" required/>
                                <label htmlFor="grnQty">&nbsp;&nbsp;QTY of Item</label>
                            </div>
                            <div className="form-floating mb-3 ">
                                <select className="form-select form-select mb-3" id="payType" onChange={(e) => this.handle(e)} required>
                                    <option value=""></option>
                                    <option value="Cash">Cash</option>
                                    <option value="Credit">Credit</option>
                                    <option value="Cheque">Cheque</option>
                                </select>
                                <label htmlFor="payType">&nbsp;&nbsp;Pay Type</label>
                            </div>
                            <div className="form-floating mb-3 ">
                                <input type="number" className="form-control" id="bulckPrice" onChange={(e) => this.handle(e)} placeholder="Bulck Price" required/>
                                <label htmlFor="bulckPrice">&nbsp;&nbsp;Bulck Price</label>
                            </div>
                            <div className="form-floating mb-3 ">
                                <input type="number" className="form-control" id="actualBulkPrice" onChange={(e) => this.handle(e)} placeholder="Actual Bulk Price" required/>
                                <label htmlFor="actualBulkPrice">&nbsp;&nbsp;Actual Bulk Price</label>
                            </div>
                            <div className="form-floating mb-3 ">
                                <input type="date" className="form-control" id="dueDate" onChange={(e) => this.handle(e)} placeholder="Due Date"/>
                                <label htmlFor="dueDate">&nbsp;&nbsp;Due Date</label>
                            </div>
                            <div className="form-floating mb-3 ">
                                <textarea className="form-control" id="remarks" rows="3"></textarea>
                                <label htmlFor="remarks">&nbsp;&nbsp;Remarks</label>
                            </div>
                        </div>
    
                        <br/>
                        <button type='submit' className='btn btn-success'><i className="bi bi-download"></i> &nbsp; Save</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default GRNAdd;