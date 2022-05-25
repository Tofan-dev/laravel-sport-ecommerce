import "./chart.css";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const Chart = () => {
    const data = [
        {
            name: "Month A",
            "Active user": 4000,
        },
        {
            name: "Month B",
            "Active user": 3000,
        },
        {
            name: "Month C",
            "Active user": 2000,
        },
        {
            name: "Month D",
            "Active user": 2780,
        },
        {
            name: "Month E",
            "Active user": 1890,
        },
        {
            name: "Month F",
            "Active user": 2390,
        },
        {
            name: "Month G",
            "Active user": 3490,
        },
    ];
    return (
        <div className="chart">
            <h3 className="chartTitle">User Analytics</h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="red" />
                    <Line type="monotone" dataKey="Active user" stroke="red" />
                    <Tooltip />
                    <CartesianGrid stroke="gray" />
                    <Legend />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
