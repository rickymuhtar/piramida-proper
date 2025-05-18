import React from 'react';
import { ResponsiveContainer, PyramidChart, PyramidSeries, PyramidTooltip } from 'recharts';

const data = [
  { name: 'Emas', value: 85, color: '#FFD700' },
  { name: 'Hijau', value: 229, color: '#228B22' },
  { name: 'Biru', value: 2650, color: '#1E90FF' },
  { name: 'Merah', value: 1326, color: '#FF4500' },
  { name: 'Hitam', value: 2, color: '#000000' },
];

export default function PiramidaPROPER() {
  return (
    <div className="piramida-container">
      <ResponsiveContainer width="60%" height={400}>
        <PyramidChart data={data}>
          <PyramidSeries dataKey="value" nameKey="name" colorKey="color" />
          <PyramidTooltip formatter={(value, name) => `${name}: ${value} perusahaan`} />
        </PyramidChart>
      </ResponsiveContainer>
    </div>
  );
}
