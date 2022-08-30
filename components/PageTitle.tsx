/** @jsx h */
import { h } from "preact";
import { FCProps } from "../utils/types.ts";
import { tw } from "@twind";

export default function PageTitle({
  children,
  classes,
}: FCProps<{ classes?: string }>) {
  return (
    <h1 class={tw`text-2xl font-bold my-4 ${classes || ""}`}>{children}</h1>
  );
}
