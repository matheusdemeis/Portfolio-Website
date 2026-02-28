# Project Details mobile notes

## Repro viewports
- 390 x 844 (iPhone 12/13)
- 375 x 812
- 320 x 568

## Existing issues observed
- Fixed demo frame size (`402px x 874px`) can overflow narrow viewports.
- Header metadata uses two columns on very small screens, creating cramped cards.
- Very long title/body content can feel tight without explicit wrapping/line-height tuning.
- Featured blog media uses a wide `16/5` aspect ratio that becomes too short on mobile.
- Action links are inline and can become hard to tap on small screens.

## Fix plan
- Make media/demo containers fluid with max width and aspect-ratio based sizing.
- Collapse dense grids to a single column on mobile and restore at `sm`/`lg`.
- Add mobile-first spacing and text wrapping safeguards.
- Improve button/link tap targets and mobile stacking.
