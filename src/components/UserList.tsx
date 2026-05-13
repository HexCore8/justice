import type { User } from '../types'

function StatusDot({ status }: { status?: User['status'] }) {
  const cls =
    status === 'online' ? 'dot dotOnline' : status === 'busy' ? 'dot dotBusy' : 'dot dotOffline'
  return <span className={cls} aria-label={status ?? 'offline'} />
}

export function UserList(props: {
  sourceLabel: string
  users: User[]
  selectedUserId: string
  onSelectUser: (userId: string) => void
}) {
  return (
    <div className="userList">
      <div className="userListHeader">
        <div className="userListTitle">{props.sourceLabel}</div>
        <div className="userListMeta">{props.users.length} users</div>
      </div>

      <ul className="userItems" role="list">
        {props.users.map((u) => {
          const selected = u.id === props.selectedUserId
          return (
            <li key={u.id}>
              <button
                type="button"
                className={selected ? 'userItem userItemSelected' : 'userItem'}
                onClick={() => props.onSelectUser(u.id)}
              >
                <span className="userCursor" aria-hidden="true" />
                <span className={`userThumb${u.avatarSrc ? ' userThumbHasImg' : ''}`} aria-hidden="true">
                  {u.avatarSrc ? <img src={u.avatarSrc} alt="" loading="lazy" /> : null}
                </span>
                <span className="userMain">
                  <span className="userNameRow">
                    <span className="userName">{u.displayName}</span>
                    <StatusDot status={u.status} />
                  </span>
                  <span className="userSub">{u.handle ?? (u.status ? u.status : '—')}</span>
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

