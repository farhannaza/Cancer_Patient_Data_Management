/// <reference types="@remix-run/dev" />
/// <reference types="@remix-run/node" />

declare module NodeJS {
  interface ProcessEnv {
    CLERK_PUBLISHABLE_KEY: string;
    CLERK_SECRET_KEY: string;
  }
}
