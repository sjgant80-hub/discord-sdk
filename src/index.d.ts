/**
 * discord-sdk TypeScript declarations
 */
export interface DiscordOptions {
  apiKey?: string;
  baseURL?: string;
  headers?: Record<string, string>;
}

export class Discord {
  constructor(options?: DiscordOptions);
  request(path: string, opts?: RequestInit): Promise<any>;
}

export default Discord;

export const meta: {
  name: string;
  category: string;
  homepage: string;
  docs_url: string;
  endpoints_count: number;
};
