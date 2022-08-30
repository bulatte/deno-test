/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { PageProps, Handlers } from "$fresh/server.ts";

import PageTitle from "../../components/PageTitle.tsx";
import { Post } from "../../utils/types.ts";

export const handler: Handlers<Post> = {
  async GET(_req, ctx) {
    const post = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${ctx.params.id}`
    ).then((res) => res.json());

    return ctx.render(post);
  },
};

export default function Home({ data }: PageProps<Post>) {
  return (
    <>
      <PageTitle classes="capitalize">{data.title}</PageTitle>
      <p>{data.body}</p>
    </>
  );
}
