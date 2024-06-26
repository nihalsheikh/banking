// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://90ae3908e04c728ef5a559b8cdd216c1@o4507470142308352.ingest.de.sentry.io/4507492343087184",

  // Sample rate for session
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0,

  integrations: [
    Sentry.replayIntegration({
      // Additional Replay configuration goes in here, for example:
      maskAllText: true,
      blockAllMedia: true,
    }),

    Sentry.replayCanvasIntegration({
      enableManualSnapshot: true,
    }),
  ],
});
