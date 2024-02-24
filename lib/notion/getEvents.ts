import { QueryDataBaseResponse } from '@/types/Notion/database';

import { getNotion } from '../helper';

export const getEvents = async (): Promise<QueryDataBaseResponse | undefined> => {
  const res = await getNotion('/events', { revalidate: 60 });
  if (!res.ok) return;
  return await res.json();
};
