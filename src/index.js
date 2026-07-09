/**
 * discord-sdk · sovereign wrapper for Discord
 * Comms/Chat
 *
 * Auto-generated from target docs · 2026-07-09
 * generic HTTP client
 *
 * Docs (upstream): https://discord.com/developers/docs/reference
 * Homepage: https://discord.com
 */

export class Discord {
  constructor({ apiKey, baseURL = 'https://discord.com', headers = {} } = {}) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.headers = {
      
      
      ...headers
    };
  }

  /** Not yet implemented — this API's OpenAPI spec was not machine-parseable. Use fetch() directly against https://discord.com/developers/docs/reference. */
  async request(path, opts = {}) {
    const res = await fetch(this.baseURL + path, { ...opts, headers: { ...this.headers, ...opts.headers } });
    if (!res.ok) throw new Error('discord ' + res.status);
    return res.json();
  }
}

export default Discord;

// Metadata
export const meta = {
  "name": "Discord",
  "category": "Comms/Chat",
  "homepage": "https://discord.com",
  "docs_url": "https://discord.com/developers/docs/reference",
  "endpoints_count": 0
};
