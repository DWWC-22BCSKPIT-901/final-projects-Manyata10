import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { format } from 'date-fns';
import { EmotionData } from '../types';

interface EmotionChartProps {
  data: EmotionData[];
}

export const EmotionChart: React.FC<EmotionChartProps> = ({ data }) => {
  const formattedData = data.map(d => ({
    ...d,
    time: format(new Date(d.timestamp), 'HH:mm:ss'),
    stressLevel: Math.round(d.stressLevel * 100),
  }));

  return (
    <div className="w-full h-64 mt-6">
      <ResponsiveContainer>
        <LineChart data={formattedData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis domain={[0, 100]} />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="stressLevel" 
            stroke="#8884d8" 
            name="Stress Level (%)"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};