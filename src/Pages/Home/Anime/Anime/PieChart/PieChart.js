import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { VictoryPie } from "victory-pie";

const myData = [
    { x: "PHP", y: 8 },
    { x: "Python", y: 13 },
    { x: "Javascript", y: 65344 },
];


const PieChart = () => {
    const [pie, setPie] = useState();
    const { ChartId } = useParams()
    useEffect(() => {
        fetch(`https://api.jikan.moe/v3/search/anime?q=/${ChartId}&limit=1`)
            .then(res => res.json())
            .then(data => setPie(data.results))
    }, [setPie, ChartId])
    console.log('mypie', pie)
    return (
        <div>
            <h2>hi bro{ChartId}</h2>
            <VictoryPie
                data={myData}
                colorScale={["blue", "yellow", "red"]}
                radius={100}
            />
        </div>
    );
};

export default PieChart;