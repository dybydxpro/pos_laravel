import React from 'react';
//import PropTypes from 'prop-types';
import Services from "../../../Services";
import icon from '../../../image/bootstrap-logo.svg';
import "../../../CSS/bill.css";

class HolesaleBill extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
            form:[],
        }
    }

    async componentDidMount() {
        const pathname = window.location.pathname;
        const words = pathname.split('/');
        var id = words[4];
        console.log(id);

        Services.holesaleBillFetch(id)
        .then(({data})=>{
          //console.log(data);
          this.setState({data: data});
        }).catch(({response})=>{
          console.log(response);
        })

        /*Services.downloadSaleBill(id)
        .then(({data})=>{
          console.log(data);
        }).catch(({response})=>{
          console.log(response);
        })*/
    } 

    async handle(e){
        const pathname = window.location.pathname;
        const words = pathname.split('/');
        var id = words[4];
        const newData = {...this.state.form};
        newData[e.target.id] = e.target.value;
        var total = 0;
        for(var a = 0; a < this.state.data.length; ++a){
            total = total + this.state.data[a].sellPrice;
        }
        newData["payblePrice"] = total;
        newData["billID"] = id;
        this.setState({form: newData});
        console.log(newData);
    }

    async openTab() {
        const pathname = window.location.pathname;
        const words = pathname.split('/');
        var id = words[4];
        window.open('http://127.0.0.1:8000/holesale/downloadBill/'+id);
    }

    async totalOfPaybleBill(){
        var total = 0;
        for(var a = 0; a < this.state.data.length; ++a){
            total = total + this.state.data[a].sellPrice;
        }
        return total;
    }

    async addData(){
        const pathname = window.location.pathname;
        const words = pathname.split('/');
        var id = words[4];

        Services.addHSPay(this.state.form)
        .then(({data})=>{
          console.log(data);
          window.location.replace("/admin/holesale/printbill/"+id);
          alert("Successfully added!");
        }).catch(({response})=>{
          console.log(response);
        })
    }

    render() {
        const {data} = this.state;

        function dataPrint(){
            if(data.length == 0 || data === undefined){
                return(
                    <tr>
                        <th colSpan={7} className="text-center"> No data</th>
                    </tr>
                )
            }
            else{
                return(
                    data.map(datas =>
                        <tr key={datas.itemID}>
                            <th scope="col">{datas.item}</th>
                            <th scope="col" width="150px" className="text-center">{datas.unit}</th>
                            <th scope="col" width="150px" className="text-end">{datas.cartQty.toFixed(2)}</th>
                            <th scope="col" width="150px" className="text-end">{datas.cartPrice.toFixed(2)}</th>
                            <th scope="col" width="150px" className="text-end">{datas.sellPrice.toFixed(2)}</th>
                        </tr>
                    )
                )
            }   
        }

        function totalOfBill(){
            var total = 0;
            for(var a = 0; a < data.length; ++a){
                total = total + data[a].cartPrice;
            }
            return total;
        }

        function totalOfPaybleBill(){
            var total = 0;
            for(var a = 0; a < data.length; ++a){
                total = total + data[a].sellPrice;
            }
            return total;
        }

        return (
            <div className='billBody-'>
                <br />
                <div>
                    <div className="row">
                        <div className="col-3"></div>
                        <div className="col-2"><img className="mb-4" src={ icon } alt="" width="72" height="57"/></div>
                        <div className="col-4 display-4 align-middle">Arya Labs</div>
                        <div className="col-3"></div>
                    </div>
                </div>
                <div className="text-center my-3">
                    <h2>List of Items.</h2>
                </div>
                <div className="container">
                    
                </div>
                <div className="container">
                    <table className="table">
                        <thead className="table-dark">
                            <tr className="text-center align-middle">
                                <th scope="col">Item Name</th>
                                <th scope="col" width="150px">Unit</th>
                                <th scope="col" width="150px">Qty</th>
                                <th scope="col" width="150px">Price</th>
                                <th scope="col" width="150px">Price with discount</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataPrint()}
                        </tbody>
                        <tfoot>
                            <tr className="table-active">
                                <th scope="col">No. of Items: &nbsp;&nbsp; {data.length}</th>
                                <th scope="col"></th>
                                <th scope="col" className="text-center">Total (Rs.):</th>
                                <th scope="col" className="text-end">{ totalOfBill().toFixed(2) }</th>
                                <th scope="col" className="text-end">{ totalOfPaybleBill().toFixed(2) }</th>
                            </tr>
                        </tfoot>
                    </table>

                    <div>
                        <div className='d-flex justify-content-end'>
                            <button className="btn btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#paymentModal"><i className="bi bi-plus-square"></i> &nbsp;Add Payment Details</button>
                            <div className="modal fade" id="paymentModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <form>
                                            <div className="modal-header">
                                                <h5 className="modal-title" id="exampleModalLabel">Add payment type.</h5>
                                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div className="modal-body">
                                                <div className="form-floating mb-3 ">
                                                    <select className="form-select form-select mb-3" onChange={(e) => this.handle(e)} id="payType" required>
                                                        <option value=""></option>
                                                        <option value="Credit">Credit</option>
                                                        <option value="Cheque">Cheque</option>
                                                    </select>
                                                    <label htmlFor="itemID">&nbsp;&nbsp;Items</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="number" className="form-control" value={totalOfPaybleBill()} onChange={(e) => this.handle(e)} id="payblePrice" placeholder="Add" readOnly/>
                                                    <label htmlFor="payblePrice">Payble price</label>
                                                </div>
                                                <div className="form-floating mb-3">
                                                    <input type="date" className="form-control" onChange={(e) => this.handle(e)} id="dueDate" placeholder="Add" required/>
                                                    <label htmlFor="dueDate">Due Date</label>
                                                </div>
                                                <div className="form-floating mb-3 ">
                                                    <textarea className="form-control" onChange={(e) => this.handle(e)} id="remakes" rows="3" required></textarea>
                                                    <label htmlFor="remakes">&nbsp;&nbsp;Remarks</label>
                                                </div>
                                            </div>
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="button"  onClick={() => this.addData()} className="btn btn-primary">Save changes</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => this.openTab()} className="btn btn-secondary btn-lg" type="button"><i className="bi bi-printer"></i> &nbsp;Print Bill</button>
                        </div>
                    </div>
                </div>
            </div>
        );  
    }
}

export default HolesaleBill;