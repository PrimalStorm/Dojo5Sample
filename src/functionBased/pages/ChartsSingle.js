import React, { useState } from "react"
import { useParams } from "react-router-dom"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { BarChart, Bar } from 'recharts';
import styled from 'styled-components';

const ChartsSingle = () => {
  // Original Axis Format
  const data1 = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  // Reversed Axis Format
  const data2 = [
    {
      name: 'Page A',
      uv: 24000,
      pv: 4000,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 1398,
      pv: 3000,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 9800,
      pv: 2000,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 3908,
      pv: 2780,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 4800,
      pv: 1890,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 3800,
      pv: 2390,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 4300,
      pv: 3490,
      amt: 2100,
    },
  ];

  // Slug properties
  const chartData = [
    {
        slug: "charts-line",
        title: "Simple Line Chart",
        description1:
        "This is an example of a simple line chart",
        chart :
        1
    },
    {
        slug: "charts-next",
        title: "Simple Bar Chart",
        description1:
        "This is an example of a simple bar chart",
        chart:
        2
    },
  ]
 
  // Determine slug type and get corresponding properties
  const { slug } = useParams()
  const chartContent = chartData.find(item => item.slug === slug)
  const { title, description1, chart } = chartContent
  
  // Another method of doing CSS using the styled import instead
  const Button = styled.button`
  background-color: black;
  color: white;
  font-size: 20px;
  padding: 10px 60px;
  border-radius: 5px;
  margin: 10px 0px;
  cursor: pointer;
  `;

  // Declare state variable for data
  const [dataType, setDataType] = useState(data1);
  const [dataVer, setDataVer] = useState(1);

  // Button click handler 
  function toggleAxis() {
    if( dataVer === 1 ) {
      //alert("Toggle Axis Clicked Data1->Data2!")
      setDataVer(2);
      setDataType(data2);
    } else {
      //alert("Toggle Axis Clicked Data2->Data1!")
      setDataVer(1);
      setDataType(data1);
    }
  }

  // Return appropriate chart type
  if (chart === 1) {
    return (
      // Line Chart
      <div className="chart__content"> 
        <h1>{title}</h1>
        <p>{description1}</p>
        <Button onClick={toggleAxis}>Toggle Axis</Button>;
        <div className="charts__content" style={{ height: 900 }}> 
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={dataType}
              margin={{
                top: 0,
                right: 30,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  } else {
    // Bar chart
    return (
      <div className="chart__content"> 
        <h1>{title}</h1>
        <p>{description1}</p>
        <Button onClick={toggleAxis}>Toggle Axis</Button>;
        <div className="charts__content" style={{ height: 900 }}> 
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              width={500}
              height={300}
              data={dataType}
              margin={{
                top: 0,
                right: 30,
                left: 0,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}
export default ChartsSingle