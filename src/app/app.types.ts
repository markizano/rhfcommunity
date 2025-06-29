export type MediaType = {
  type: 'photo' | 'video' | 'youtube',
  url: string,
  description?: string,
};

export interface Candidate {
  id: string;
  name: string;
  photoUrl: string;
  bio: string;
  reasonForRunning: string;
  learnMoreUrl?: string;
  whyVoteForMe?: string;
  additionalMedia?: MediaType[];
};
