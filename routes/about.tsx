/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import PageTitle from "../components/PageTitle.tsx";
import { tw } from "@twind";

export default function AboutPage() {
  return (
    <>
      <PageTitle>About</PageTitle>
      <p>
        Nulla quis lorem ut libero malesuada feugiat. Vestibulum ante ipsum
        primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec
        velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula.
        Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla
        quis lorem ut libero malesuada feugiat.
      </p>
      <p class={tw`my-4`}>
        Nulla quis lorem ut libero malesuada feugiat. Mauris blandit aliquet
        elit, eget tincidunt nibh pulvinar a. Curabitur arcu erat, accumsan id
        imperdiet et, porttitor at sem. Vestibulum ac diam sit amet quam
        vehicula elementum sed sit amet dui.
      </p>
    </>
  );
}
