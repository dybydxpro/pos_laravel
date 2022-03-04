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