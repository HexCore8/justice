import type { AppSource, Message, User } from '../types'
import { buildCasualHistory } from './conversationBuilders'

export type ConversationMap = Record<string, Message[]>

export type SourceData = {
  label: string
  users: User[]
  conversationsByUserId: ConversationMap
}

/** Long histories (~220 msgs each) — reads like you've texted forever. */
const HISTORY_LEN = 220

const telegramChats: ConversationMap = {
  'tg-olivia': buildCasualHistory({
    contactFirstName: 'Olivia',
    messageIdPrefix: 'tg-olivia',
    messageCount: HISTORY_LEN,
  }),
  'tg-mateo': buildCasualHistory({
    contactFirstName: 'Mateo',
    messageIdPrefix: 'tg-mateo',
    messageCount: HISTORY_LEN,
  }),
  'tg-sarah': buildCasualHistory({
    contactFirstName: 'Sarah',
    messageIdPrefix: 'tg-sarah',
    messageCount: HISTORY_LEN,
  }),
}

const whatsappChats: ConversationMap = {
  'wa-alex': buildCasualHistory({
    contactFirstName: 'Alex',
    messageIdPrefix: 'wa-alex',
    messageCount: HISTORY_LEN,
  }),
  'wa-nina': buildCasualHistory({
    contactFirstName: 'Nina',
    messageIdPrefix: 'wa-nina',
    messageCount: HISTORY_LEN,
  }),
  'wa-jordan': buildCasualHistory({
    contactFirstName: 'Jordan',
    messageIdPrefix: 'wa-jordan',
    messageCount: HISTORY_LEN,
  }),
}

const contactChats: ConversationMap = {
  'mb-priya': buildCasualHistory({
    contactFirstName: 'Priya',
    messageIdPrefix: 'mb-priya',
    messageCount: HISTORY_LEN,
  }),
  'mb-sam': buildCasualHistory({
    contactFirstName: 'Sam',
    messageIdPrefix: 'mb-sam',
    messageCount: HISTORY_LEN,
  }),
  'mb-eli': buildCasualHistory({
    contactFirstName: 'Eli',
    messageIdPrefix: 'mb-eli',
    messageCount: HISTORY_LEN,
  }),
}

export const meetingBoardData: Record<AppSource, SourceData> = {
  telegram: {
    label: 'Telegram',
    users: [
      { id: 'tg-olivia', displayName: 'Olivia Chen', handle: '@olivia', status: 'online' },
      { id: 'tg-mateo', displayName: 'Mateo Silva', handle: '@mateo', status: 'busy' },
      { id: 'tg-sarah', displayName: 'Sarah Johnson', handle: '@sarahj', status: 'offline' },
    ],
    conversationsByUserId: telegramChats,
  },
  whatsapp: {
    label: 'WhatsApp',
    users: [
      { id: 'wa-alex', displayName: 'Alex Kim', status: 'online' },
      { id: 'wa-nina', displayName: 'Nina Patel', status: 'offline' },
      { id: 'wa-jordan', displayName: 'Jordan Lee', status: 'online' },
    ],
    conversationsByUserId: whatsappChats,
  },
  Contact: {
    label: 'Contact',
    users: [
      { id: 'mb-priya', displayName: 'Priya Nair', status: 'busy' },
      { id: 'mb-sam', displayName: 'Sam Rivera', status: 'online' },
      { id: 'mb-eli', displayName: 'Eli Brown', status: 'offline' },
    ],
    conversationsByUserId: contactChats,
  },
}
