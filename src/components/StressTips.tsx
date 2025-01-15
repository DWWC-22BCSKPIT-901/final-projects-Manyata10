import React from 'react';
import { Brain, Wind, Activity } from 'lucide-react';
import { StressTip } from '../types';

const tips: StressTip[] = [
  {
    id: 1,
    title: 'Deep Breathing',
    description: 'Take 5 deep breaths, inhaling for 4 counts and exhaling for 6 counts.',
    category: 'breathing'
  },
  {
    id: 2,
    title: 'Quick Exercise',
    description: 'Stand up and do 10 shoulder rolls to release tension.',
    category: 'exercise'
  },
  {
    id: 3,
    title: 'Mindful Moment',
    description: 'Focus on your surroundings and name 3 things you can see, hear, and feel.',
    category: 'mindfulness'
  }
];

interface StressTipsProps {
  currentStressLevel: number;
}

export const StressTips: React.FC<StressTipsProps> = ({ currentStressLevel }) => {
  const getIcon = (category: StressTip['category']) => {
    switch (category) {
      case 'breathing':
        return <Wind className="w-6 h-6" />;
      case 'exercise':
        return <Activity className="w-6 h-6" />;
      case 'mindfulness':
        return <Brain className="w-6 h-6" />;
      default:
        return null;
    }
  };

  const relevantTips = tips.filter((tip) => {
    if (currentStressLevel > 0.7) return true;
    if (currentStressLevel > 0.4) return tip.category === 'breathing';
    return tip.category === 'mindfulness';
  });

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Recommended Actions</h3>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {relevantTips.map((tip) => (
          <div
            key={tip.id}
            className="p-4 rounded-lg bg-white shadow-md border border-gray-100"
          >
            <div className="flex items-center gap-3 mb-2">
              {getIcon(tip.category)}
              <h4 className="font-medium">{tip.title}</h4>
            </div>
            <p className="text-gray-600">{tip.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};