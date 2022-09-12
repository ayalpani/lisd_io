import classNames from "classnames";
import { ReactNode } from "react";
import { ANIMATIONS_DURATION } from "../../../../config/constants";
import { useIsFirstRender } from "../../../../hooks/useIsFirstRender";
import { StyleSheets } from "../../../../libs/stylesheets";
import "./SimpleAnimation.scss";

type $TransformOrigin = string | number;

export type $NamedAnimations =
  | "bounceIn"
  | "bounceInUp"
  | "bounceOut"
  | "bounceOutUp"
  | "fadeIn"
  | "fadeOut"
  | "fadeInLeft"
  | "fadeInUp"
  | "bounceIn"
  | "rotateIn"
  | "slideInRight"
  | "slideInDown"
  | "slideOutUp"
  | "slideInUp"
  | "slideOutDown"
  | "slideInLeft"
  | "slideOutLeft"
  | "slideOutRight"
  | "rotateIn"
  | "rotateOut"
  | "zoomIn"
  | "zoomOut";

export function AtomicAnimation({
  opacity,
  scale,
  translateX,
  translateY,
  rotate,
  children,
  delay = 0,
  duration = ANIMATIONS_DURATION,
  className,
  origin,
}: {
  opacity?: number;
  scale?: number;
  translateX?: number;
  translateY?: number;
  rotate?: number;
  children: ReactNode;
  delay?: number; // milliseconds
  duration?: number; // milliseconds
  className?: string;
  origin?: $TransformOrigin;
}) {
  const transformations = [];

  if (rotate) transformations.push(`rotate(${rotate}deg)`);
  if (scale) transformations.push(`scale(${scale})`);
  if (translateX) transformations.push(`translateX(${translateX}px)`);
  if (translateY) transformations.push(`translateY(${translateY}px)`);

  return (
    <div
      className={
        classNames({
          AtomicAnimation: true,
        }) +
        " " +
        className
      }
      style={{
        transformOrigin: origin,
        willChange: "transform",
        opacity,
        transform: transformations.join(" "),
        transitionDelay: delay ? delay + "ms" : undefined,
        transitionDuration: duration ? duration + "ms" : undefined,
      }}
    >
      {children}
    </div>
  );
}

export function ScaleAnimation({
  scale,
  children,
  className,
  origin,
}: {
  scale: number;
  children: ReactNode;
  className?: string;
  origin?: $TransformOrigin;
}) {
  return (
    <AtomicAnimation className={className} scale={scale} origin={origin}>
      {children}
    </AtomicAnimation>
  );
}

export function TranslateXAnimation({
  translateX,
  children,
}: {
  translateX: number;
  children: ReactNode;
}) {
  return <AtomicAnimation translateX={translateX}>{children}</AtomicAnimation>;
}

export function TranslateYAnimation({
  translateY,
  children,
}: {
  translateY: number;
  children: ReactNode;
}) {
  return <AtomicAnimation translateY={translateY}>{children}</AtomicAnimation>;
}

export function TranslateXAndYAnimation({
  translateX,
  translateY,
  className,
  children,
}: {
  translateX: number;
  translateY: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <AtomicAnimation
      translateX={translateX}
      translateY={translateY}
      className={className}
    >
      {children}
    </AtomicAnimation>
  );
}

export function RotateAnimation({
  rotate,
  className,
  children,
}: {
  rotate: number;
  className?: string;
  children: ReactNode;
}) {
  return (
    <AtomicAnimation rotate={rotate} className={className}>
      {children}
    </AtomicAnimation>
  );
}

type $SimpleAnimationProps = {
  doShow?: boolean;
  doHideOnFirstRender?: boolean;
  flex?: number;
  showAnimation?: $NamedAnimations;
  hideAnimation?: $NamedAnimations;
  children: ReactNode;
};

function SimpleAnimation({
  doShow = true,
  doHideOnFirstRender = false,
  flex,
  showAnimation = "fadeIn",
  hideAnimation = "fadeOut",
  children,
}: $SimpleAnimationProps) {
  const isFirstRender = useIsFirstRender();
  const doAnimate = (() => {
    if (!isFirstRender) return true;
    if (!doHideOnFirstRender) return true;

    return false;
  })();

  const classes = {
    SimpleAnimation: classNames("SimpleAnimation", {
      doShow,
      animate__animated: doAnimate,
      ["animate__" + showAnimation]: doShow,
      ["animate__" + hideAnimation]: !doShow,
    }),
  };

  const styles = StyleSheets.create({
    SimpleAnimation: { flex },
  });

  return (
    <div className={classes.SimpleAnimation} style={styles.SimpleAnimation}>
      {children}
    </div>
  );
}

export { SimpleAnimation };
