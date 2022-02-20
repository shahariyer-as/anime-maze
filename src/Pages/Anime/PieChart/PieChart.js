import React from 'react';
import { VictoryPie } from "victory-pie";

const myData = [
    { x: "Tv", y: 23 },
    { x: "Others", y: 19 },
    { x: "Specials", y: 44 },
    { x: "Ova", y: 11 },
];


const PieChart = () => {

    return (
        <div className='pie'>
            <VictoryPie
                data={myData}
                colorScale={["blue", "yellow", "red", "green"]}
                radius={100}
            />
        </div>
    );
};

export default PieChart;