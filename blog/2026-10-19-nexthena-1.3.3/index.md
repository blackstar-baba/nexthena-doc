---
slug: nexthena-1.3.3
title: Nexthena v1.3.3 — AI Stream Reliability and Faster Notifications
authors: blackstar-baba
tags: [nexthena]
---

Nexthena v1.3.3 is a reliability maintenance release focused on AI stream failure handling and quicker notification feedback.

<!-- truncate -->

## AI Stream Reliability

Invalid AI model configurations no longer leave assistant messages stuck in a permanent loading state. Failures during stream startup or while a response is streaming are now finalized in the message store and reported to the interface.

Stream completion is persisted before listeners are notified, preventing stale loading indicators during the final refresh.

## Faster Notifications

Global toast notifications now dismiss automatically after 1.2 seconds, down from 3 seconds, so feedback clears from the screen sooner.

This release does not change diagram data formats or provider configuration.

## Get v1.3.3

- **macOS:** [Download from the Mac App Store](https://apps.apple.com/us/app/nexthena/id6756844674)
- **Windows and Linux:** [Download from GitHub Releases](https://github.com/blackstar-baba/nexthena-asset/releases/tag/v1.3.3)

For platform-specific installation instructions, see the [getting started guide](/docs/intro).
