// CJS file; CLI reads this reliably
const cfg = {
  override: {
    wrapper: "cloudflare-node",
    converter: "edge",
    proxyExternalRequest: "fetch",
    incrementalCache: "dummy",
    tagCache: "dummy",
    queue: "direct",
  },
};

// IMPORTANT: export an object whose *default* is cfg
module.exports = { default: cfg };