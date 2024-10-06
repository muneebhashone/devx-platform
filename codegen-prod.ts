import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  config: { reactQueryVersion: 5 },
  schema: "http://localhost:5000/graphql",
 
  documents: "./src/graphql/**/*.graphql",

  generates: {
    "./src/graphql/generated/hooks.ts": {
      config: {
        fetcher: {
          func: "../../lib/fetcher#axiosGraphQL",
          isReactHook: false,
        },
        prepend: ["'use client';"],
      },
      plugins: [
        "typescript",
        "typescript-operations",
        "@graphql-codegen/typescript-react-query",
      ],
    },
  },
};

export default config;
