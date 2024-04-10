// Chứa phiên bản máy khách ChatKitty

// DIRECT: TRÒ CHUYỆN TRỰC TIẾP

import ChatKitty from '@chatkitty/core';

export const chatkitty = ChatKitty.getInstance('4e6eea4e-4b67-48e0-b26f-31693f5e4704');

export function channelDisplayName(channel) {
  if (channel.type === 'DIRECT') {
    return channel.members.map((member) => member.displayName).join(', ');
  } else {
    return channel.name;
  }
}