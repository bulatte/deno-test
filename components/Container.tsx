/** @jsx h */
import { h, RenderableProps } from "preact";
import { tw } from "@twind";

const Container = (props: RenderableProps<{ classes?: string }>) => {
  return (
    <div class={tw`p-4 mx-auto w-full max-w-screen-lg ${props.classes || ""}`}>
      {props.children}
    </div>
  );
};

export default Container;
