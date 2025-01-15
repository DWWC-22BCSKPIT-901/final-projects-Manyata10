export interface EmotionData {
  timestamp: number;
  emotions: {
    neutral: number;
    happy: number;
    sad: number;
    angry: number;
    fearful: number;
    disgusted: number;
    surprised: number;
  };
  stressLevel: number;
}

export interface StressTip {
  id: number;
  title: string;
  description: string;
  category: 'breathing' | 'exercise' | 'mindfulness' | 'general';
}