import React, { useState, useEffect } from "react";
import Chart from "react-apexcharts";
import Services from "../../../Services";

function DailyReport(){
    const [options, setOptions] = useState({});
    const [series, setSeries] = useState([]);

    const [optionsh, setOptionsh] = useState({});
    const [seriesh, setSeriesh] = useState([]);

    useEffect(() => {
        fetchData();
        fetchHSData();
    },[])

    function fetchData(){
        Services.dailyChartData().then(({data})=>{
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
                colors: ["#181818"]
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
                colors: ["#181818"]
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
                <h1>Daily Sales Chart.</h1>
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
                <h1>Daily Hole Sales Chart.</h1>
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

export default DailyReport;