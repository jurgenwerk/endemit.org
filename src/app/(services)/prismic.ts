import { createClient } from "@prismicio/client";

export const prismic = createClient(process.env.PRISMIC_REPOSITORY_NAME!, {
  accessToken: process.env.PRISMIC_ACCESS_TOKEN,
});
