import Image from "next/image";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

const imageWrapperStyle = {
  position: "relative",
  width: "100%",
  height: "300px",
  overflow: "hidden",
  maxWidth: "600px",
  margin: "0 auto",
};

export const markdownComponents = {
  img: (image) => (
    <div style={imageWrapperStyle}>
      <Image
        src={image.src}
        alt={image.alt || "Image"}
        fill
      />
    </div>
  ),
  p: (paragraph) => {
    const { node } = paragraph;

    if (node.children[0].tagName === "img") {
      return paragraph.children;
    }
    return <p>{paragraph.children}</p>;
  },
  code: (code) => {
    const { className, children } = code;
    const language = className ? className.replace("language-", "") : "";
    return (
      <SyntaxHighlighter language={language} style={atomDark}>
        {children}
      </SyntaxHighlighter>
    );
  }
};