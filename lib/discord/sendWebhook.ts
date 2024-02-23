'use server';

import { MessageEmbedType } from '@/types/ContactForm/MessageEmbed';

const webhookUrl = process.env.MESSAGE_WEBHOOK_URL;

export const sendWebhook = async (embed: MessageEmbedType) => {
  try {
    const response = await fetch(webhookUrl as string, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: 'RAW-Mailer',
        avatar_url:
          'https://cdn.discordapp.com/attachments/935974650926731296/1210594772113170443/Avatar_and_Backdrop.png?ex=65eb213d&is=65d8ac3d&hm=96992b3b88b1f02596021b8ef7cc5b126bd2624f2cd3d2b246cd260c1fb7e0da&',
        embeds: [embed],
      }),
    });

    if (response.ok) {
      return 200;
    } else {
      return response;
    }
  } catch (error) {
    return error.status;
  }
};
