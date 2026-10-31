// Claims reviewed against vibe-playlist at 11c0a7f; evidence map in the Phase 3A report.
export const vibeplayJourney = [
  ['Connect', 'Authorize a Spotify account with access to the application. Connection feedback distinguishes checking, connected, and reconnect states.'],
  ['Choose', 'Start with a mood, then add an artist or catalog search phrase and choose a playlist length. The mix studio also combines moods and genres.'],
  ['Generate', 'Turn those preferences into Spotify catalog searches. Collect candidates from multiple sources and select a mix with recording deduplication and artist variety.'],
  ['Make it yours', 'Review the tracks before saving. In the studio, lock favorites, remove tracks, shuffle the order, or explicitly regenerate the selection.'],
  ['Save', 'Choose a name, description, and private or public visibility. The save flow creates the playlist, adds the reviewed tracks, and preserves recovery information if interrupted.'],
];

export const vibeplayDecisions = [
  {
    title: 'Keep the session out of the interface',
    problem: 'An expired session can interrupt a playlist just as someone is ready to save it.',
    decision: 'Use Authorization Code with PKCE, one-use OAuth state, and server-managed refresh. Access and refresh tokens stay inside an encrypted HttpOnly cookie, unreadable to browser JavaScript.',
    value: 'The interface can show connection state without handling raw credentials or asking users to restart on every token expiry.',
  },
  {
    title: 'Respect the preference, even when results are short',
    problem: 'Taking the first search results can overrepresent one genre, artist, or recording.',
    decision: 'Collect across search sources within a fixed request budget, deduplicate recordings, and prefer artist variety. Mood presets map to genre filters; artist identity and catalog text keep selections constrained.',
    value: 'A short, honest result is preferable to silently broadening the request. This is catalog-based selection, not audio analysis or an AI recommendation model. Unchanged preferences can return the same mix.',
  },
  {
    title: 'Make failures useful',
    problem: 'A rate limit, lost connection, and an empty search need different next steps.',
    decision: 'Preserve meaningful API errors and retry delays, bound browser waiting time, and keep the previous mix when generation fails. Explain partial results instead of treating every failure as an empty playlist.',
    value: 'Users retain their work and can understand whether to adjust preferences, reconnect, or wait.',
  },
  {
    title: 'Treat an uncertain save as uncertain',
    problem: 'Spotify may create a playlist even when the response never reaches the application. Retrying creation can leave duplicates.',
    decision: 'Record the save attempt locally and block blind resubmission. When a playlist ID is known, signed recovery binds the account and draft, checks existing track order, and appends only what is missing.',
    value: 'Recovery favors the existing playlist over starting again. Browser locks and a process-local cache reduce duplicates; they do not guarantee exactly-once creation across devices or server instances.',
  },
];
