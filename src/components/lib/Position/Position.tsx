import React, { ReactEventHandler, ReactNode } from "react";
import "./Position.scss";

export const Position = ({
  className = "",
  type = "absolute",
  flexDirection,
  flex,
  inset,
  top,
  right,
  bottom,
  left,
  height,
  width,
  marginTop,
  marginLeft,
  marginRight,
  marginBottom,
  alignSelf,
  alignItems,
  justifyContent,
  backgroundColor,
  translateX,
  translateY,
  rotate,
  filter,
  scale,
  opacity,
  zIndex,
  pointerEvents,
  transformOrigin,
  children,
  onClick,
}: {
  className?: string;
  type?: "absolute" | "relative" | "fixed";
  flexDirection?: "column" | "row";
  flex?: number;
  inset?: number;
  top?: number;
  right?: number;
  bottom?: number;
  left?: number;
  height?: number;
  width?: number | string;
  marginTop?: number;
  marginLeft?: number;
  marginRight?: number;
  marginBottom?: number;
  alignSelf?: "flex-start" | "center" | "flex-end";
  alignItems?: "flex-start" | "center" | "flex-end"; // TODO incomplete list
  justifyContent?: "flex-start" | "center" | "flex-end" | "space-between"; // TODO incomplete list
  backgroundColor?: string;
  translateX?: number;
  translateY?: number;
  rotate?: number;
  filter?: string;
  scale?: number;
  opacity?: number;
  zIndex?: number;
  pointerEvents?: "auto" | "none";
  transformOrigin?: string;
  children?: ReactNode;
  onClick?: ReactEventHandler;
}) => {
  const transforms = [];
  if (translateX) transforms.push(`translateX(${translateX}px)`);
  if (translateY) transforms.push(`translateY(${translateY}px)`);
  if (scale) transforms.push(`scale(${scale})`);
  if (rotate) transforms.push(`rotate(${rotate}deg)`);

  const style: React.CSSProperties = {
    position: type,
    flexDirection,
    flex,
    height,
    width,
    marginTop,
    marginLeft,
    marginRight,
    marginBottom,
    alignSelf,
    alignItems,
    justifyContent,
    backgroundColor,
    transform: transforms.join(" "),
    transformOrigin,
    filter,
    opacity,
    zIndex,
    pointerEvents,
  };

  if (inset !== undefined) {
    style.inset = inset;
  } else {
    style.top = top;
    style.right = right;
    style.bottom = bottom;
    style.left = left;
  }

  return (
    <div style={style} onClick={onClick} className={"Position " + className}>
      {children}
    </div>
  );
};
