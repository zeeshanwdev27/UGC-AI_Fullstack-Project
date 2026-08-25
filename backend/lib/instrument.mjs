import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://8e552a81ae1bd95a253a4accf9dfa635@o4511972916723712.ingest.de.sentry.io/4511972927537232",
  dataCollection: {
    // To disable sending user data and HTTP bodies, uncomment the lines below. For more info visit:
    // https://docs.sentry.io/platforms/javascript/guides/node/configuration/options/#dataCollection
    // userInfo: false,
    // httpBodies: [],
  },
});