import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  config: { reactQueryVersion: 5 },
  schema: "http://localhost:5000/graphql",
 
  documents: "./src/graphql/**/*.graphql",
  watch: true,
  verbose: true,

  watchConfig: {
    usePolling: true,
    interval: 1000,
  },
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
