export interface Candidate {
  id: string;
  name: string;
  photoUrl: string;
  bio: string;
  reasonForRunning: string;
  learnMoreUrl?: string;
  whyVoteForMe?: string;
  additionalMedia?: Array<{
    type: 'photo' | 'video';
    url: string;
    description?: string;
  }>;
} 