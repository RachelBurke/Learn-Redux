import Raven from "raven-js";

const sentry_key = "1a1c1ddc7cef4981b56697ea5e5413bf";
const sentry_app = "1528238";
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
