import Sentry from "@se"
const Sentry = require("@sentry/node");

Sentry.init({
  dsn: "https://b832d828a9390112a71b51b463bca082@o4510148542595073.ingest.us.sentry.io/4510148558913536", 
  sendDefaultPii: true,
});
