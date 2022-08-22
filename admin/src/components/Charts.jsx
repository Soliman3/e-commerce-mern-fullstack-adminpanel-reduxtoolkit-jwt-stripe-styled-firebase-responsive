import React from 'react'
import styled from 'styled-components'

// import Simple line chart from recharts library...
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Styling...
const Container = styled.div`
    margin: 20px;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 10px;
`
const ChartTitle = styled.div`
    
`

export default function Charts({}) {
    // Simple Chart Data...
    const data = [
        {
          name: 'Page A',
          ActiveUser: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: 'Page B',
          ActiveUser: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: 'Page C',
          ActiveUser: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: 'Page D',
          ActiveUser: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: 'Page E',
          ActiveUser: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: 'Page F',
          ActiveUser: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: 'Page G',
          ActiveUser: 3490,
          pv: 4300,
          amt: 2100,
        },
      ];
  return (
    <Container>
          <ChartTitle>Revenues Chart</ChartTitle>
          <ResponsiveContainer width="100%" aspect={4/1}>
          <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="pv" stroke="blue" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="ActiveUser" stroke="#1cdf0e" />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  )
}
