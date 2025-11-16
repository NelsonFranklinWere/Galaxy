import "@testing-library/jest-dom";
import React from "react";

jest.mock("next/image", () => {
  const MockImage = ({
    src,
    alt,
    width,
    height,
    fill,
    className,
    style,
  }: any) => {
    const computedStyle = fill
      ? {
          ...style,
          objectFit: style?.objectFit ?? "cover",
          width: "100%",
          height: "100%",
        }
      : style;

    return React.createElement("img", {
      src,
      alt,
      width: fill ? undefined : width ?? 600,
      height: fill ? undefined : height ?? 400,
      style: computedStyle,
      className,
    });
  };
  return {
    __esModule: true,
    default: MockImage,
  };
});

