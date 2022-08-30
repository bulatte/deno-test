/** @jsx h */
/** @jsxFrag Fragment */
import { Fragment, h } from "preact";
import { Head } from "$fresh/runtime.ts";
import { AppProps } from "$fresh/server.ts";
import { tw } from "@twind";
import Header from "../components/Header.tsx";
import Footer from "../components/Footer.tsx";
import Container from "../components/Container.tsx";

const TITLE = "My First Fresh App";

export default function App(props: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content={TITLE} />
        <title>{TITLE}</title>
      </Head>

      <div class={tw`flex flex-col min-h-screen`}>
        <Header />

        <Container classes="flex-1">
          <props.Component />
        </Container>

        <Footer />
      </div>
    </>
  );
}
