import { useEffect, useMemo, useState } from 'react'
import type { AppSource, User } from './types'
import { meetingBoardData } from './data/dummyData'
import { AppHeader } from './components/AppHeader'
import { UserList } from './components/UserList'
import { ChatWindow } from './components/ChatWindow'
import { PhoneEntryModal } from './components/PhoneEntryModal'
import { BootLoadingScreen } from './components/BootLoadingScreen'

type BootPhase = 'phone' | 'loading' | 'main'

export function App() {
  const [bootPhase, setBootPhase] = useState<BootPhase>('phone')
  const [phoneInput, setPhoneInput] = useState('')

  useEffect(() => {
    if (bootPhase !== 'loading') return
    const id = window.setTimeout(() => setBootPhase('main'), 5000)
    return () => window.clearTimeout(id)
  }, [bootPhase])

  const phoneTrimmed = phoneInput.trim()
  const canSubmitPhone = phoneTrimmed.length > 0

  const handlePhoneContinue = () => {
    if (!canSubmitPhone) return
    setBootPhase('loading')
  }
  const sources = useMemo(
    () =>
      (Object.keys(meetingBoardData) as AppSource[]).map((key) => ({
        key,
        label: meetingBoardData[key].label,
      })),
    [],
  )

  const [selectedSource, setSelectedSource] = useState<AppSource>('telegram')
  const [selectedUserId, setSelectedUserId] = useState<string>(() => {
    const first = meetingBoardData.telegram.users[0]
    return first?.id ?? ''
  })

  const sourceData = meetingBoardData[selectedSource]
  const users = sourceData.users

  const selectedUser: User | undefined = users.find((u) => u.id === selectedUserId) ?? users[0]
  const effectiveUserId = selectedUser?.id ?? ''

  const messages = sourceData.conversationsByUserId[effectiveUserId] ?? []

  const handleSelectSource = (next: AppSource) => {
    setSelectedSource(next)
    const first = meetingBoardData[next].users[0]
    setSelectedUserId(first?.id ?? '')
  }

  if (bootPhase === 'phone') {
    return (
      <PhoneEntryModal
        value={phoneInput}
        onChange={setPhoneInput}
        onSubmit={handlePhoneContinue}
        canSubmit={canSubmitPhone}
      />
    )
  }

  if (bootPhase === 'loading') {
    return <BootLoadingScreen />
  }

  return (
    <div className="appShell">
      <AppHeader sources={sources} selectedSource={selectedSource} onSelectSource={handleSelectSource} />
      <main className="board">
        <aside className="panel panelUsers" aria-label="Users">
          <UserList
            sourceLabel={sourceData.label}
            users={users}
            selectedUserId={effectiveUserId}
            onSelectUser={setSelectedUserId}
          />
        </aside>
        <section className="panel panelChat" aria-label="Conversation">
          <ChatWindow
            sourceLabel={sourceData.label}
            user={selectedUser}
            messages={messages}
          />
        </section>
      </main>
    </div>
  )
}

