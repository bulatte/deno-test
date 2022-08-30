import { ComponentChildren } from "preact";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

// deno-lint-ignore ban-types
export type FCProps<P extends {} = {}> = { children: ComponentChildren } & P;
