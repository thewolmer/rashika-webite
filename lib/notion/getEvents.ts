import { getNotion } from '../helper';

export const getEvents = async () => {
  const res = await getNotion('/events', { revalidate: 60 });
  if (!res.ok) return;
  return await res.json();
};
