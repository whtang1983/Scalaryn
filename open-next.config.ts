// Re-export JS in the exact shape the CLI wants
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

// Default export must be an object with a `default` key
export default { default: cfg };