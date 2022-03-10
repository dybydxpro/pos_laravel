import React from "react";
import Services from "../../../Services";

class ReportDashboard extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            stock: [],
            topsell: [],
            tophssell: [],
            saleReminds:[],
            holeSaleReminds:[],
        }
    }

    async componentDidMount() {
        this.stockLess();
        this.topHSSellItem();
        this.topSellItem();
        this.getSalePayment();
        this.getHoleSalePayment();
    }

    async stockLess(){
        Services.lessStock().then(({data})=>{
            this.setState({stock: data});
            console.log(data);
        })
    }

    async topHSSellItem(){
        Services.topHSSellItem().then(({data})=>{
            this.setState({tophssell: data});
            console.log(data);
        })
    }

    async topSellItem(){
        Services.topSellItem().then(({data})=>{
            this.setState({topsell: data});
            console.log(data);
        })
    }

    async getSalePayment(){
        Services.getSalePayment().then(({data})=>{
            this.setState({saleReminds: data});
            console.log(data);
        })
    }

    async getHoleSalePayment(){
        Services.getHoleSalePayment().then(({data})=>{
            this.setState({holeSaleReminds: data});
            console.log(data);
        })
    }

    render(){
        const {stock} = this.state;
        const {topsell} = this.state;
        const {tophssell} = this.state;
        const {saleReminds} = this.state;
        const {holeSaleReminds} = this.state;
        const userName = sessionStorage.getItem("userName");

        function printStockLess(){
            if(stock.length == 0 || stock === undefined){
                return(
                    <li className="list-group-item">No items found!</li>
                )
            }
            else{
                return(
                    stock.map((data) =>
                        <li className="list-group-item bg-danger text-light" key={data.stockID}>Item Name: <b>{data.item}</b>, &nbsp; StockID: <b>{data.stockID}</b>, &nbsp; Qty: <b>{data.qty}</b></li>
                    )
                )
            }   
        }

        function printTopHSSellingItem() {
            if(tophssell.length == 0 || tophssell === undefined){
                return(
                    <li className="list-group-item">No items found!</li>
                )
            }
            else{
                return(
                    tophssell.map((data) =>
                        <li className="list-group-item bg-primary text-light" key={data.itemID}>Item: <b>{data.itemID}</b>, &nbsp; Item Name: <b>{data.item}</b></li>
                    )
                )
            }   
        }

        function printTopSellingItem() {
            if(topsell.length == 0 || topsell === undefined){
                return(
                    <li className="list-group-item">No items found!</li>
                )
            }
            else{
                return(
                    topsell.map((data) =>
                        <li className="list-group-item bg-warning text-light" key={data.itemID}>Item: <b>{data.itemID}</b>, &nbsp; Item Name: <b>{data.item}</b></li>
                    )
                )
            }   
        }

        function printSalePayment() {
            if(saleReminds.length == 0 || saleReminds === undefined){
                return(
                    <li className="list-group-item">No items found!</li>
                )
            }
            else{
                return(
                    saleReminds.map((data) =>
                        <li className="list-group-item bg-info text-dark" key={data.payID}>Date: <b>{data.dueDate}</b>, &nbsp; Payment Type: <b>{data.payType}</b> &nbsp; Value: <b>{data.payblePrice}</b></li>
                    )
                )
            }   
        }

        function printHoleSalePayment() {
            if(holeSaleReminds.length == 0 || holeSaleReminds === undefined){
                return(
                    <li className="list-group-item">No items found!</li>
                )
            }
            else{
                return(
                    holeSaleReminds.map((data) =>
                        <li className="list-group-item bg-secondary text-light" key={data.payID}>Date: <b>{data.dueDate}</b>, &nbsp; Payment Type: <b>{data.payType}</b> &nbsp; Value: <b>{data.payblePrice}</b></li>
                    )
                )
            }   
        }

        return (
            <div>
                <br />
                <div className="row">
                    <div>
                        <h1 className="text-center">Hi {userName},</h1>
                    </div>
                    <div>
                        <h3 className="text-center"><i>Welcome to the Arya-Labs POS system.</i></h3>
                    </div>
                </div>
    
                <div className="row">
                    <div className="col-4">
                        <div className="shadow p-3 mb-5 bg-body rounded">
                            <ul className="list-group">
                                <li className="list-group-item bg-dark text-light text-center">Top selling items.</li>
                                { printTopSellingItem() }
                            </ul>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="shadow p-3 mb-5 bg-body rounded">
                            <ul className="list-group">
                                <li className="list-group-item bg-dark text-light text-center">Top wholesale selling items.</li>
                                { printTopHSSellingItem() }
                            </ul>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="shadow p-3 mb-5 bg-body rounded">
                            <ul className="list-group">
                                <li className="list-group-item bg-dark text-light text-center">Stock Warnings</li>
                                { printStockLess() }
                            </ul>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="shadow p-3 mb-5 bg-body rounded">
                            <ul className="list-group">
                                <li className="list-group-item bg-dark text-light text-center">Upcomming Sale Payment Reminds.</li>
                                { printSalePayment()}
                            </ul>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="shadow p-3 mb-5 bg-body rounded">
                            <ul className="list-group">
                                <li className="list-group-item bg-dark text-light text-center">Upcomming Whole Sale Payment Reminds.</li>
                                { printHoleSalePayment() }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ReportDashboard;