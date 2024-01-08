import { MatchedAudiences, AudienceStatus, AudienceType } from '@/store/types';

const emptyAudience: MatchedAudiences = {
  id: '',
  name: '',
  owner: '',
  status: AudienceStatus.LIVE,
  type: AudienceType.IAB,
  revenue: {
    currency: '$',
    value: 0,
  },
  accountId: '',
  publisherId: '',
  audienceId: '',
  pageViews: 0,
  uniques: 0,
};

export const staticAudiences: MatchedAudiences[] = [
  { ...emptyAudience, name: 'Automotive' },
  { ...emptyAudience, name: 'Books and Literature' },
  { ...emptyAudience, name: 'Business and Finance' },
  { ...emptyAudience, name: 'Careers' },
  { ...emptyAudience, name: 'Education' },
  { ...emptyAudience, name: 'Family and Relationships' },
  { ...emptyAudience, name: 'Fine Art' },
  { ...emptyAudience, name: 'Food & Drink' },
  { ...emptyAudience, name: 'Health and Medical Services' },
  { ...emptyAudience, name: 'Healthy Living' },
  { ...emptyAudience, name: 'Hobbies & Interests' },
  { ...emptyAudience, name: 'Home & Garden' },
  { ...emptyAudience, name: 'Medical Health' },
  { ...emptyAudience, name: 'Movies' },
  { ...emptyAudience, name: 'Music and Audio' },
  { ...emptyAudience, name: 'News and Politics' },
  { ...emptyAudience, name: 'Personal Finance' },
  { ...emptyAudience, name: 'Pets' },
  { ...emptyAudience, name: 'Pharmaceuticals, Conditions, and Symptoms' },
  { ...emptyAudience, name: 'Pop Culture' },
  { ...emptyAudience, name: 'Real Estate' },
  { ...emptyAudience, name: 'Religion & Spirituality' },
  { ...emptyAudience, name: 'Shopping' },
  { ...emptyAudience, name: 'Sports' },
  { ...emptyAudience, name: 'Style & Fashion' },
  { ...emptyAudience, name: 'Technology & Computing' },
  { ...emptyAudience, name: 'Television' },
  { ...emptyAudience, name: 'Travel' },
  { ...emptyAudience, name: 'Video Gaming' },
];