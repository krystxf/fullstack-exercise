import { z } from "zod";

export const authSchema = z.object({
  access_token: z.string(),
  expires_at: z.number(),
});
