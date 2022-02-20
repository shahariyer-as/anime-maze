import React from 'react';
import { VictoryPie } from "victory-pie";

const myData = [
    { x: "PHP", y: 8 },
    { x: "Python", y: 13 },
    { x: "Javascript", y: 65344 },
];


const PieChart = () => {

    return (
        <div>
            <h2>hi bro{ }</h2>
            <VictoryPie
                data={myData}
                colorScale={["blue", "yellow", "red"]}
                radius={100}
            />
        </div>
    );
};

export default PieChart;