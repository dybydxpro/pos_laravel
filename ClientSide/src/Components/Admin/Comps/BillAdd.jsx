import React from 'react';
import Services from "../../../Services";

class BillAdd extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            item: [],
            stock: [],
            data:[],
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
    }

    async handleData(e){
        const newData = {...this.state.data};
        newData[e.target.id] = e.target.value;
        newData["billRecorderID"] = sessionStorage.getItem("userID");
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
        }
    }

    render() {
        const {item} = this.state;
        const {stock} = this.state;
        const {data} = this.state;
        return (
            <div className="container">
            <div className="detailBox">
                <h1 className='h1 d-flex justify-content-center'>Add New Bill.</h1>
                <br/>
                <form>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" onChange={(e) => this.searchHandle(e)} id="search" placeholder="Search" required/>
                        <label htmlFor="search">Search</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select className="form-select form-select mb-3" onChange={(e) => {this.selectItem(e); this.handleData(e)}} id="itemID" required>
                            <option value=""></option>
                            {   
                                item.map(datas => <option key={datas.id} value={datas.id}>{datas.item}</option> )
                            }
                        </select>
                        <label htmlFor="item">Item</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select className="form-select form-select mb-3" onChange={(e) => this.handleData(e)} id="stockID" required>
                            <option value=""></option>
                            {   
                                stock.map(stocks => <option key={stocks.stockID} value={stocks.stockID}>{stocks.retail_price}</option> )
                            }
                        </select>
                        <label htmlFor="stock">Stock Price</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" value={data.itemID} id="itemID" placeholder="Search" required disabled/>
                        <label htmlFor="search">Item ID</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control"  id="stockID" placeholder="Search" required disabled/>
                        <label htmlFor="search">Stock ID</label>
                    </div>
                    <br/>
                    <button type='submit' className='btn btn-success'>Save</button>
                </form>
            </div>
            <div className="col-3">

            </div>
        </div>
        );
    }
}

export default BillAdd;