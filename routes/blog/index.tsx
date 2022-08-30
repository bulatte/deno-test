/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";

import { Post } from "../../utils/types.ts";
import PageTitle from "../../components/PageTitle.tsx";

export const handler: Handlers<Post[]> = {
  async GET(_req, ctx) {
    const posts = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    ).then((res) => res.json());

    return ctx.render(posts);
  },
};

export default function Blog({ data }: PageProps<Post[]>) {
  return (
    <>
      <PageTitle>Blog</PageTitle>
      <div class={tw`gap-4 grid grid-cols-2`}>
        {data.map((post) => (
          <a
            class={tw`flex flex-col p-2 border-1 justify-between`}
            key={post.id}
            href={`/blog/${post.id}`}
          >
            <span class={tw`text-lg font-bold text-capitalize mb-4 leading-5`}>
              {post.title}
            </span>
            <span>{post.body}</span>
          </a>
        ))}
      </div>
    </>
  );
}
