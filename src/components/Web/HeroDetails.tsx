import { StatCardProps } from '@/Types/types';
import React from 'react';

const StatCard: React.FC<StatCardProps> = ({ icon, label, value, showProgress = true }) => (
  <div className="bg-background rounded-xl p-4 border border-muted">
    <div className="flex items-center space-x-3 mb-2">
      {icon}
      <span className="text-muted-foreground">{label}</span>
    </div>
    <div className="text-2xl font-bold text-foreground">{value}</div>
    {showProgress && typeof value === 'number' && (
      <div className="w-full bg-zinc-800 h-2 rounded-full mt-2">
        <div className="bg-gray-400 h-2 rounded-full" style={{width: `${value}%`}}></div>
      </div>
    )}
  </div>
);

export default StatCard;