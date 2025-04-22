"use client"
import { PieChart, Pie, Cell, Legend, ResponsiveContainer } from 'recharts'

const data = [
  { name: 'Acciones', value: 400 },
  { name: 'Bonos', value: 300 },
  { name: 'CEDEARs', value: 300 },
  { name: 'Criptomonedas', value: 200 },
]

const COLORS = ['#6366F1', '#10B981', '#F59E0B', '#EF4444']

export function PortfolioPieChart() {
  return (
    <ResponsiveContainer width="100%" height={250}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={3}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend layout="vertical" align="right" verticalAlign="middle" />
      </PieChart>
    </ResponsiveContainer>
  )
}
