import * as prismicLib from "@prismicio/client";

export const prismicClient = prismicLib.createClient(
  process.env.PRISMIC_REPOSITORY_NAME!,
  {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  }
);
export const prismic = prismicLib;
