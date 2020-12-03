import React, { useEffect, useState } from 'react'
import { Bar, Bubble, Doughnut, Line, Pie, Polar, Radar, Scatter } from 'react-chartjs-2'

const LineChart = () => {
    const [mousex, setMousex] = useState();
    const [mousey, setMousey] = useState();

    useEffect(() => {
        const updateMousePosition = ev => {
            setMousex(ev.clientX);
            setMousey(ev.clientY);
        };
        window.addEventListener("mousemove", updateMousePosition);

    })

    const labelsData = [];
    for (var value = 1; value <= 30; value++) {
        labelsData.push(value);
    }
    const dataOne = [];
    for (var value = 1; value <= 1000; value++) {
        dataOne.push(Math.floor((Math.random() * 0.2) * 30));
    }
    const dataTwo = [];
    for (var value = 1; value <= 1000; value++) {
        dataTwo.push(Math.floor((Math.random() * 0.2) * 20));
    }
    const dataThree = [];
    for (var value = 1; value <= 1000; value++) {
        dataThree.push(Math.floor((Math.random() * 0.4) * 10));
    }
    console.log(dataThree);

    const data = {
        labels: labelsData,
        datasets: [
            {
                label: "One",
                backgroundColor: "rgba(235, 60, 60, 0.6)",
                data: dataOne,
            },
            {
                label: "Two",
                backgroundColor: "rgba(197, 183, 94, 0.7)",
                data: dataTwo,
            },
            {
                label: "Three",
                backgroundColor: "rgba(76, 144, 98, 1)",
                data: dataThree,
            },
        ]
    }
    return (
        <div className="lineChart" >
            {/* <Bar */}

            {/* <Pie */}
            {/* <Doughnut */}
            {/* <Polar */}

            {/* <Radar */}
            {/* <Line */}
            <Bar
                options={{
                    responsive: true,
                    showLine: false,
                    spanGaps: false,
                }}
                data={data}
            />
            <div>
                <p>{mousex}</p>
                <p>{mousey}</p>
            </div>
        </div>
    )
}

export default LineChart
