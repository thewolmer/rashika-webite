import { formDataType } from '@/types/ContactForm/formData';
import { MessageEmbedType } from '@/types/ContactForm/MessageEmbed';

const createEmbed = (formData: formDataType) => {
  const embed = {
    title: ':envelope:  New Message Received!',
    description: '[Status](https://status.wolmer.me/) | Connection closed',
    fields: [
      {
        name: 'First Name',
        value: formData.firstName,
        inline: true,
      },
      {
        name: 'Last Name',
        value: formData.lastName,
        inline: true,
      },
      {
        name: 'Email',
        value: formData.email,
        inline: false,
      },
      {
        name: 'Phone Number',
        value: formData.phoneNumber,
        inline: false,
      },
      {
        name: 'Discord',
        value: formData.discordUsername,
        inline: true,
      },
      {
        name: 'Instagram',
        value: formData.instagramUsername,
        inline: true,
      },
      {
        name: 'Message',
        value: formData.message,
      },
      {
        name: 'Text-Back Consent',
        value: formData.consent ? 'Yes' : 'No',
        inline: true,
      },
    ],
    footer: {
      text: 'sent via rashika.art',
    },
    timestamp: new Date().toISOString(),
  };

  return embed as MessageEmbedType;
};

export default createEmbed;
