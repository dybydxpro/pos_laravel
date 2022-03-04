import React from 'react';
import PropTypes from 'prop-types';
import Services from "../../../Services";
import icon from '../../../image/bootstrap-logo.svg';
import "../../../CSS/bill.css";


class BillAdd extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data:[],
        }
    }

    async componentDidMount() {
        const pathname = window.location.pathname;
        const words = pathname.split('/');
        var id = words[4];
        console.log(id);

        Services.saleBillFetch(id)
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
                </div>
            </div>
        );  
    }
}

export default BillAdd;