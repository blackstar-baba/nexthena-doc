---
slug: nexthena-1.3.2
title: Nexthena v1.3.2 — Dark-Mode AI Diagram Readability
authors: blackstar-baba
tags: [nexthena]
---

Nexthena v1.3.2 is now available, with a focus on making AI-generated diagrams easier to read in dark mode. This release builds on the AI diagram improvements introduced in v1.3.0 and v1.3.1.

<!-- truncate -->

## Dark-Mode AI Diagrams

AI-generated diagrams now use a high-contrast scheme in dark mode, with white strokes and text on transparent fills. The treatment is applied consistently to node borders, arrows, connector lines, group borders, labels, and standalone text. Image-backed Mermaid diagrams also use transparent backgrounds with white lines and text.

Diagram previews now account for the active theme in their conversion cache, so switching between light and dark mode refreshes the preview with the correct colors.

## Recent AI Diagram Improvements

In v1.3.1, the AI diagram preview received a softer `#27272A` dark-mode background, rounded corners, and proper clipping at the preview edges.

Version 1.3.0 introduced Mermaid-based AI diagram generation, converting generated Mermaid source into editable Excalidraw content. It also added diagram color palettes, a more adaptive preview, a Thinking control, a searchable model picker, and support for provider-specific OpenAI-compatible API base URLs. Streaming previews and conversion caching were improved to keep the interface responsive while AI responses arrive.

## Get v1.3.2

- **macOS:** [Download from the Mac App Store](https://apps.apple.com/us/app/nexthena/id6756844674)
- **Windows and Linux:** [Download from GitHub Releases](https://github.com/blackstar-baba/nexthena-asset/releases/tag/v1.3.2)

For platform-specific installation instructions, see the [getting started guide](/docs/intro).
