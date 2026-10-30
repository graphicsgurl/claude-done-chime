# Claude Done Chime

A small mod for Claude (desktop app and Claude Code) that plays a chime when Claude finishes answering, so you know when to come back to it while working in other windows.

- Plays only when the main conversation finishes a reply (not on interrupts, errors, or subagents).
- Plays a short original chime (`sounds/done.mp3`). Swap in any audio file to change it. Audio plays through `afplay`, so it works on macOS only.

## Install

At the prompt of a terminal session:

```
/plugin install done-chime --marketplace graphicsgurl/claude-done-chime
```

From a shell:

```
claude plugin install done-chime --marketplace graphicsgurl/claude-done-chime
```

In the desktop app, where `/plugin` does not run: click + next to the prompt box, then Plugins, Add marketplace with `graphicsgurl/claude-done-chime`, then Add plugin.
