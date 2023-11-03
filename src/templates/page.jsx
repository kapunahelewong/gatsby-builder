import { builder, BuilderComponent } from "@builder.io/react";
import { graphql } from "gatsby";

builder.init("0b40f8c2653041ee8c624e0da406c86c");

const MyComponent = (props) => {
  const content = props.data?.allBuilderModels.onePage?.content;

  return <BuilderComponent content={content} model="page" />;
};

export default MyComponent;

export const query = graphql`
  query ($path: String!) {
    allBuilderModels {
      onePage(target: { urlPath: $path }, options: { cachebust: true }) {
        content
      }
    }
  }
`;
