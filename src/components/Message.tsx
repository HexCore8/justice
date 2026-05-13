import type { Message as MessageType } from '../types'

function formatTimestamp(iso: string) {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleString([], {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  })
}

export function Message({ message }: { message: MessageType }) {
  const isOwn = message.sender.trim().toLowerCase() === 'you'
  const avatar = message.senderAvatar
  const rowClass = `${isOwn ? 'messageWrap messageWrapOwn' : 'messageWrap'}${avatar ? ' messageWrapAvatar' : ''}`

  return (
    <div className={rowClass}>
      {avatar ? (
        <img className={`messageAvatar${isOwn ? ' messageAvatarOwn' : ''}`} src={avatar} alt="" loading="lazy" />
      ) : null}
      <article className={isOwn ? 'message messageOwn' : 'message'}>
        <div className="messageTop">
          <div className="messageSender">{message.sender}</div>
          <time className="messageTime" dateTime={message.timestamp}>
            {formatTimestamp(message.timestamp)}
          </time>
        </div>
        <div className="messageText">{message.text}</div>
      </article>
    </div>
  )
}

