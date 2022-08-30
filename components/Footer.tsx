/** @jsx h */
import { h } from "preact";

import { tw } from "@twind";
import Container from "./Container.tsx";

export default function Footer() {
  return (
    <div class={tw`border-t-1`}>
      <Container classes="flex font-bold justify-between">
        <span>Footer</span>
        <span>{new Date().getFullYear()}</span>
      </Container>
    </div>
  );
}
