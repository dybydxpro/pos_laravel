import React from 'react';
import Services from "../../../Services";

class BillAdd extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }

    async componentDidMount() {
        Services.getAllItems().then(({data})=>{
            this.setState({data: data});
            console.log(data);
        })
    }

    render() {
        const {data} = this.state;
        return (
            <div className="container">
            <div className="detailBox">
                <h1 className='h1 d-flex justify-content-center'>Add New Bill.</h1>
                <br/>
                <form>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="search" placeholder="Search" required/>
                        <label htmlFor="search">Search</label>
                    </div>
                    <div className="form-floating mb-3">
                        <select className="form-select form-select mb-3" id="item" required>
                            <option value=""></option>
                            {   
                                data.map(datas => <option key={datas.id} value={datas.id}>{datas.item}</option> )
                            }
                        </select>
                        <label htmlFor="item">Item</label>
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