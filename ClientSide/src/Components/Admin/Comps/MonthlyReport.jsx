import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import Services from "../../../Services";

function MonthlyReport(){
    const [options, setOptions] = useState({});
    const [series, setSeries] = useState([]);

    const [optionsh, setOptionsh] = useState({});
    const [seriesh, setSeriesh] = useState([]);

    useEffect(() => {
        fetchData();
        fetchHSData();
    },[])

    function fetchData(){
        Services.chartData().then(({data})=>{
            const categories = [];
            const dataSet = [];
            data.map(datas =>{
                categories.push(datas.labels);
                dataSet.push(datas.data);

            });
            setOptions({
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: categories
                },
                //colors: ["#181818"]
            });
            setSeries([
                {
                    name: "Value",
                    data: dataSet
                }
            ]);
            console.log(data);
            console.log(categories);
            console.log(dataSet);
        })
    }

    function fetchHSData(){
        Services.holesaleChartData().then(({data})=>{
            const categories = [];
            const dataSet = [];
            data.map(datas =>{
                categories.push(datas.labels);
                dataSet.push(datas.data);

            });
            setOptionsh({
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: categories
                },
                //colors: ["#181818"]
            });
            setSeriesh([
                {
                    name: "Value",
                    data: dataSet
                }
            ]);
            console.log(data);
            console.log(categories);
            console.log(dataSet);
        })
    }

    return(
        <div className="container">
            <div className="d-flex justify-content-center my-3">
                <br />
                <h1>Monthly Sales Chart.</h1>
            </div>
            <div className="container d-flex col-12 justify-content-center">
                <Chart
                    options={options}
                    series={series}
                    type="bar"
                    //width="75%"
                    min-width="500px"
                    height="500px"
                />
            </div>
            <br />
            <div className="d-flex justify-content-center my-3">
                <br />
                <h1>Monthly Whole Sales Chart.</h1>
            </div>
            <div className="container d-flex col-12 justify-content-center">
                <Chart
                    options={optionsh}
                    series={seriesh}
                    type="bar"
                    //width="75%"
                    min-width="500px"
                    height="500px"
                />
            </div>
        </div>
    );  
}

export default MonthlyReport;

/*
class MonthlyReport extends Component{
    constructor(props){
        super(props);
        this.state = {
            options: {
                chart: {
                    id: "basic-bar"
                },
                xaxis: {
                    categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999] //1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999
                }
            },
            series: [
                {
                    name: "series-1",
                    data: [30, 40, 45, 50, 49, 60, 70, 91] //30, 40, 45, 50, 49, 60, 70, 91
                }
            ]
        }
    }

    async componentDidMount() {
        Services.chartData().then(({data})=>{
            const categories = [];
            const dataSet = [];
            data.map(datas =>{
                categories.push(String(datas.labels));
                dataSet.push(datas.data);
                //this.setState({categories: datas.labels});
                //this.setState({data: datas.data});
            });
            this.setState({categories: categories});
            this.setState({data: dataSet});
            console.log(data);
            console.log(categories);
            console.log(dataSet);
            //console.log(this.state.categories);
            //console.log(this.state.data);
        })
        //console.log(this.state.categories);
        //console.log(this.state.data);
    }

    render(){
        return(
            <div className="container">
                di
                <h1>Hi</h1>
                <Chart
                    options={this.state.options}
                    series={this.state.series}
                    type="bar"
                    width="75%"
                />
            </div>
        );
    }   
}
*/