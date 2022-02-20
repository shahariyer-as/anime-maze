import React from "react";
import { VictoryPie } from "victory-pie";

const myData = [
    { x: "PHP", y: 900 },
    { x: "Python", y: 400 },
    { x: "Javascript", y: 300 },
];

const App = () => {
    return (
        <div>
            <VictoryPie
                data={myData}
                colorScale={["blue", "yellow", "red"]}
                radius={100}
            />
        </div>
    );
};

export default App;