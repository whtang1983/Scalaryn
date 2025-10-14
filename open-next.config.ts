// open-next.config.ts
export default {
  override: {
    // Runtime wrapper for Cloudflare-style workers (what Webflow Cloud uses)
    wrapper: "cloudflare-node",
    // Convert Next APIs to Edge-compatible handlers
    converter: "edge",
    // How external requests are proxied
    proxyExternalRequest: "fetch",
    // Use built-in no-op caches unless you wire up KV/R2/etc.
    incrementalCache: "dummy",
    tagCache: "dummy",
    // Queue strategy (no queue infra by default)
    queue: "direct",
  },
} as const;