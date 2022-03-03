// eslint-disable-next-line no-unused-vars
let moment = require("moment");
// eslint-disable-next-line no-unused-vars
let momentDurationFormatSetup = require("moment-duration-format");
// export function formatDuration(duration) {
//   if (duration !== null) {
//     return moment.utc(duration.asMilliseconds()).format("H[时]m[分]s[秒]");
//   }
// }
export function formatDuration(duration) {
  if (duration !== null) {
    return duration.format("Y[年]M[月]d[天]h[时]m[分]s[秒]");
  }
}
