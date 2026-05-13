export type AppSource = 'telegram' | 'whatsapp' | 'Contact'

export type User = {
  id: string
  displayName: string
  handle?: string
  status?: 'online' | 'offline' | 'busy'
  avatarSrc?: string
}

export type Message = {
  id: string
  sender: string
  text: string
  timestamp: string // ISO string
  senderAvatar?: string
}

