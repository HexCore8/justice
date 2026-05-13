import type { Message as MessageType, User } from '../types'
import { Message } from './Message'

export function ChatWindow(props: {
  sourceLabel: string
  user?: User
  messages: MessageType[]
}) {
  return (
    <div className="chatWindow">
      <div className="chatHeader">
        <div className="chatHeaderTitle">
          {props.user ? props.user.displayName : 'Select a user'}
        </div>
        <div className="chatHeaderMeta">
          {props.sourceLabel}
          {props.user?.handle ? ` • ${props.user.handle}` : ''}
        </div>
      </div>

      <div className="chatBody" role="log" aria-label="Conversation history">
        {props.messages.length === 0 ? (
          <div className="emptyState">
            <div className="emptyTitle">No messages</div>
            <div className="emptySub">Choose another user or source.</div>
          </div>
        ) : (
          props.messages.map((m) => <Message key={m.id + m.timestamp} message={m} />)
        )}
      </div>
    </div>
  )
}

