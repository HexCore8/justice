import type { Message } from '../types'

type Turn = 'c' | 'u'

/**
 * Scripted beats that read like two people who've texted forever—short, overlapping, imperfectly punctuation'd.
 * 'c' = contact, 'u' = you (shown as sender "You" in UI).
 */
const SCENES: { role: Turn; text: (_contact?: string) => string }[][] = [
  [
    { role: 'c', text: () => `hey.` },
    { role: 'u', text: () => `morning.` },
    { role: 'c', text: () => `don't "morning" me like we've never argued about pizza toppings at 2am.` },
    { role: 'u', text: () => `we've argued about everything at 2am. it's our brand.` },
    { role: 'c', text: () => `fair. you free later or are you in "inbox zero" cosplay again.` },
    { role: 'u', text: () => `if i hit inbox zero i'll buy you coffee. so… probably not. but text me after six.` },
  ],
  [
    { role: 'c', text: () => `i'm outside. it's cold and i'm dramatic about it.` },
    { role: 'u', text: () => `you're always dramatic about it. did you bring the jacket i told you to bring.` },
    { role: 'c', text: () => `…no.` },
    { role: 'u', text: () => `okay. i'm not saying i told you so. i'm typing it calmly so you'll hear the eye roll.` },
    { role: 'c', text: () => `if i die of hypothermia you're explaining this to my mom.` },
    { role: 'u', text: () => `nobody's dying. uber home. i'm paying. stop arguing—we've done this drill like 400 times.` },
  ],
  [
    { role: 'u', text: () => `did you eat.` },
    { role: 'c', text: () => `define eat.` },
    { role: 'u', text: () => `food. chewing. swallowing. the hit Broadway musical.` },
    { role: 'c', text: () => `i had crackers and spite.` },
    { role: 'u', text: () => `so no. i'm ordering you soup. spicy or tame.` },
    { role: 'c', text: () => `spicy. you're annoyingly sweet when you're bossy.` },
  ],
  [
    { role: 'c', text: () => `SOS my brain is sideways.` },
    { role: 'u', text: () => `one sentence version.` },
    { role: 'c', text: () => `meeting rewrote reality and now i owe emails i never agreed to.` },
    { role: 'u', text: () => `say "i'll circle back tomorrow morning" and mute the thread. not a personality flaw. a boundary.` },
    { role: 'c', text: () => `you make chaos sound survivable.` },
    { role: 'u', text: () => `you've survived me for years. this is nothing.` },
  ],
  [
    { role: 'u', text: () => `send pic of the thing you said was "fine".` },
    { role: 'c', text: () => `rude.` },
    { role: 'u', text: () => `accurate.` },
    { role: 'c', text: () => `it's fine in a spiritual sense.` },
    { role: 'u', text: () => `so it's not fine.` },
    { role: 'c', text: () => `…it's leaning. i need tea and fifteen minutes without people explaining charts at me.` },
    { role: 'u', text: () => `i'm bringing tea. mute your doorbell complaints in advance.` },
  ],
  [
    { role: 'c', text: () => `i'm bored and you're responsible.` },
    { role: 'u', text: () => `bold accusation.` },
    { role: 'c', text: () => `pick a movie genre or we're relitigating pineapple again.` },
    { role: 'u', text: () => `noir. subtitles. snacks you pretend you won't finish in one sitting.` },
    { role: 'c', text: () => `you're so weirdly predictable it's almost romantic.` },
    { role: 'u', text: () => `take the compliment without making it awkward.` },
  ],
  [
    { role: 'u', text: () => `i'm five minutes late. traffic is auditioning for a villain arc.` },
    { role: 'c', text: () => `i claimed the corner booth like a petty lord.` },
    { role: 'u', text: () => `good. order water for me. i'm dehydrated and delusional.` },
    { role: 'c', text: () => `already did. straw included because you're secretly twelve.` },
    { role: 'u', text: () => `i love that you pretend that's an insult.` },
  ],
  [
    { role: 'c', text: () => `hypothetical.` },
    { role: 'u', text: () => `the worst word in the english language. go.` },
    { role: 'c', text: () => `if i moved apartments would you help or just stand there dramatically useless.` },
    { role: 'u', text: () => `both. i'll carry boxes and complain artistically.` },
    { role: 'c', text: () => `deal.` },
  ],
  [
    { role: 'c', text: () => `do you ever miss when we didn't know each other's coffee orders.` },
    { role: 'u', text: () => `no. that sounds exhausting.` },
    { role: 'c', text: () => `wow. romantic.` },
    { role: 'u', text: () => `i show love by remembering oat milk and your weird little sugar packet ritual.` },
    { role: 'c', text: () => `…okay that was smooth. gross.` },
  ],
  [
    { role: 'u', text: () => `you good.` },
    { role: 'c', text: () => `yeah. weird day but yeah.` },
    { role: 'u', text: () => `want company or want silence.` },
    { role: 'c', text: () => `company that doesn't need me to perform being okay.` },
    { role: 'u', text: () => `then come over. sweatpants policy. i'll make the bad tea you like.` },
    { role: 'c', text: () => `it's not bad. it's honest.` },
  ],
  [
    { role: 'c', text: () => `i sent the email. feel free to clap.` },
    { role: 'u', text: () => `standing ovation in my kitchen.` },
    { role: 'c', text: () => `you're such a dork.` },
    { role: 'u', text: () => `your dork. we've established this.` },
    { role: 'c', text: () => `…stfu.` },
    { role: 'u', text: () => `love you too.` },
  ],
  [
    { role: 'c', text: () => `remind me why we do this to ourselves every quarter.` },
    { role: 'u', text: () => `money. pride. the tiny hit of dopamine when a checkbox surrenders.` },
    { role: 'c', text: () => `poetic. also wrong. it's because you're competitive and i enable you.` },
    { role: 'u', text: () => `pot meet kettle. send the deck. i'll mark it up like a supportive monster.` },
  ],
  [
    { role: 'u', text: () => `stop scrolling and sleep.` },
    { role: 'c', text: () => `you first.` },
    { role: 'u', text: () => `i'm already in bed. phone brightness on "self-sabotage".` },
    { role: 'c', text: () => `we are the same person in different fonts.` },
    { role: 'u', text: () => `goodnight.` },
    { role: 'c', text: () => `night.` },
  ],
  [
    { role: 'c', text: () => `i bought the wrong milk on purpose to see if you'd notice.` },
    { role: 'u', text: () => `i noticed in three seconds. you're a terrible scientist.` },
    { role: 'c', text: () => `hypothesis: you're obsessed with me.` },
    { role: 'u', text: () => `conclusion: you're buying oat milk tomorrow and acting normal.` },
  ],
  [
    { role: 'c', text: () => `can i ask you something without you making a joke first.` },
    { role: 'u', text: () => `i'll try. no promises.` },
    { role: 'c', text: () => `do you think we're… good at this. like us.` },
    { role: 'u', text: () => `yeah. messy sometimes, but good. ask me again in another 200 conversations if you need receipts.` },
    { role: 'c', text: () => `annoying. perfect answer.` },
  ],
  [
    { role: 'u', text: () => `i sent you a meme. react honestly.` },
    { role: 'c', text: () => `i hate that i laughed.` },
    { role: 'u', text: () => `that means it's art.` },
    { role: 'c', text: () => `no it means we're broken in identical ways.` },
    { role: 'u', text: () => `still a compliment.` },
  ],
  [
    { role: 'c', text: () => `i'm pretending i won't check my phone during dinner.` },
    { role: 'u', text: () => `i'll pretend i didn't draft three replies while you chew.` },
    { role: 'c', text: () => `if i send you a blurry food pic don't roast me.` },
    { role: 'u', text: () => `i'll roast you lovingly.` },
    { role: 'c', text: () => `that's not better.` },
  ],
  [
    { role: 'u', text: () => `your umbrella is at my place again.` },
    { role: 'c', text: () => `technically yours now. we've signed the treaty verbally like nine times.` },
    { role: 'u', text: () => `fine. ransom is one breakfast.` },
    { role: 'c', text: () => `cheap date.` },
    { role: 'u', text: () => `you love it.` },
  ],
  [
    { role: 'c', text: () => `i rewatched our old joke and now i'm smiling like an idiot at a red light.` },
    { role: 'u', text: () => `if someone honked i hope you looked guilty.` },
    { role: 'c', text: () => `i did the little wave. pathetic.` },
    { role: 'u', text: () => `cute pathetic. different category.` },
  ],
  [
    { role: 'u', text: () => `i fixed the thing on your laptop you said you'd fix "this weekend"` },
    { role: 'c', text: () => `rude.` },
    { role: 'u', text: () => `you're welcome.` },
    { role: 'c', text: () => `…thank you.` },
    { role: 'u', text: () => `i accept payment in playlists.` },
  ],
  [
    { role: 'c', text: () => `if i spiral text you at midnight will you answer or lecture me about sleep.` },
    { role: 'u', text: () => `both. lovingly.` },
    { role: 'c', text: () => `perfect. that's the vibe.` },
  ],
]

function sceneStartOffset(seed: string): number {
  let h = 0
  for (let i = 0; i < seed.length; i++) h = (h << 5) - h + seed.charCodeAt(i)
  return Math.abs(h) % SCENES.length
}

const minutesAgo = (m: number) => new Date(Date.now() - m * 60_000).toISOString()

export function buildCasualHistory(options: {
  contactFirstName: string
  messageIdPrefix: string
  messageCount?: number
}): Message[] {
  const { contactFirstName, messageIdPrefix, messageCount = 220 } = options
  const flat: { role: Turn; text: string }[] = []
  let sceneIndex = sceneStartOffset(messageIdPrefix)
  while (flat.length < messageCount) {
    const scene = SCENES[sceneIndex % SCENES.length]
    for (const line of scene) {
      if (flat.length >= messageCount) break
      flat.push({
        role: line.role,
        text: line.text(contactFirstName),
      })
    }
    sceneIndex += 1
  }

  const out: Message[] = []
  let minutesBack = 2
  for (let i = 0; i < flat.length; i++) {
    const step = flat[i]
    const sender = step.role === 'u' ? 'You' : contactFirstName
    minutesBack += 3 + (i % 7)
    out.push({
      id: `${messageIdPrefix}-${i}`,
      sender,
      text: step.text,
      timestamp: minutesAgo(minutesBack),
    })
  }
  return out.reverse()
}
