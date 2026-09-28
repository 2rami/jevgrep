export const providers = {
  vercel: {
    label: "Vercel AI Gateway",
    baseURL: "https://ai-gateway.vercel.sh/typesafe/v1",
    model: "typesafe-ai/jev",
  },
  typesafe: {
    label: "TypeSafe",
    baseURL: "https://api.typesafe.ai/v1",
    model: "jev-1.13.0",
  },
  openrouter: {
    label: "OpenRouter",
    baseURL: "https://openrouter.ai/api/v1",
    model: "typesafe/jev-1.13",
  },
  opencode: {
    label: "OpenCode Zen",
    baseURL: "https://opencode.ai/zen/v1",
    model: "jev-1.13",
  },
  opengateway: {
    label: "OpenGateway",
    baseURL: "https://apis.opengateway.ai/v1",
    model: "typesafe/jev-1.13",
    // Same request and answer schema as TypeSafe, but served at /decisions; /systemone is a 404 there.
    evaluationPath: "/decisions",
  },
} as const;

export type ProviderId = keyof typeof providers;

export function isProviderId(value: unknown): value is ProviderId {
  return typeof value === "string" && Object.hasOwn(providers, value);
}
