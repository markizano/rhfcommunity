export type MediaType = {
  type: 'photo' | 'video' | 'youtube',
  url: string,
  description?: string,
};

export type Candidate = {
  id?: number,
  name: string,
  email: string,
  lots: string[],
  address: string,
  photo: string,
  card: string,
  bio: string,
  additionalMedia?: MediaType[],
};
