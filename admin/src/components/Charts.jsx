import React from 'react'
import styled from 'styled-components'

// import Simple line chart from recharts library...
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Styling...
const Container = styled.div`
    margin: 10px 20px 0px 20px;
    padding: 20px;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    border-radius: 10px;
`
const ChartTitle = styled.div`
    font-weight:700;
    font-size: 20px;
    margin-bottom: 10px;
`

export default function Charts({ data, title, firstLine, secondLine }) {
  return (
    <Container>
      <ChartTitle>{title}</ChartTitle>
      <ResponsiveContainer width="100%" aspect={4 / 1}>
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
          <Line type="monotone" dataKey={secondLine} stroke="blue" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey={firstLine} stroke="#1cdf0e" />
        </LineChart>
      </ResponsiveContainer>
    </Container>
  )
}
