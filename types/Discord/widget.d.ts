export interface DiscordWidgetType {
  id: string;
  name: string;
  instant_invite: string;
  channels: Channel[];
  members: Member[];
  presence_count: number;
}

export interface Channel {
  id: string;
  name: string;
  position: number;
}

export interface Member {
  id: string;
  username: string;
  discriminator: string;
  avatar: null;
  status: Status;
  avatar_url: string;
  game?: Game;
  deaf?: boolean;
  mute?: boolean;
  self_deaf?: boolean;
  self_mute?: boolean;
  suppress?: boolean;
  channel_id?: string;
}

export interface Game {
  name: string;
}

export enum Status {
  DND = 'dnd',
  Idle = 'idle',
  Online = 'online',
}
