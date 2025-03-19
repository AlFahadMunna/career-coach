import { Inngest } from "inngest";

export const inngest = new Inngest({
  id: "pathai",
  name: "pathai",
  credentials: {
    gemini: {
      apiKey: process.env.GEMINI_API_KEY,
    },
  },
});
