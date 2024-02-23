import { siteConfig } from '@/config/site';

import { DiscordWidgetType } from '@/types/Discord/widget';

const serverID = siteConfig.discordServerID;
export const getDiscordWidget = async (): Promise<DiscordWidgetType | undefined> => {
  const res = await fetch(`https://discord.com/api/guilds/${serverID}/widget.json`);
  if (!res.ok) return;
  return await res.json();
};
