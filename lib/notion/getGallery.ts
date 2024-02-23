import { QueryDataBaseResponse } from '@/types/Notion/database';

import { getNotion } from '../helper';

export const getGallery = async (): Promise<QueryDataBaseResponse | undefined> => {
  const res = await getNotion('/gallery', { revalidate: 60 });
  if (!res.ok) return;
  return await res.json();
};
