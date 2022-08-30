/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Container from "./Container.tsx";

export default function Header() {
  return (
    <div class={tw`border-b-1 sticky top-0 bg-white`}>
      <Container classes="flex flex-1 justify-between">
        <a href="/">
          <img
            src="/logo.svg"
            height="100px"
            class={tw`mr-6`}
            alt="the fresh logo: a sliced lemon dripping with juice"
          />
        </a>
        <div class={tw`flex gap-10 items-center`}>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
        </div>
      </Container>
    </div>
  );
}
