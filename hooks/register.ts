import type { Register } from 'claude-code'

export const register: Register = on => {
  on('turn.complete', async ($, e, next) => {
    const result = await next(e)

    // Main loop only, and only when Claude actually answered.
    if (e.agentId === undefined && e.reason === 'answer') {
      await $.audio.play({ asset: 'sounds/done.mp3' }).catch(() => {})
    }

    return result
  })
}
