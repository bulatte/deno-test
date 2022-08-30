/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";

import Counter from "../islands/Counter.tsx";
import PageTitle from "../components/PageTitle.tsx";

export default function Home() {
  return (
    <>
      <PageTitle>Home</PageTitle>
      <Counter start={3} />
    </>
  );
}
