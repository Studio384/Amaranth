import { IAmicon } from ".";
import HTMLReactParser from "html-react-parser";
import { cx, css, keyframes } from "@emotion/css";
import { CSSProperties } from "react";

interface AmiconProps {
  icon: IAmicon;
  rotate?: 0 | 90 | 180 | 270 | false;
  flip?: true | "x" | "y" | false;
  spin?: boolean | "pulse";
  beat?: boolean;
  style?: CSSProperties;
}

export default function Amicon({
  flip = undefined,
  icon,
  rotate = undefined,
  spin = undefined,
  beat = undefined,
  ...props
}: AmiconProps) {
  const spinAnimation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

  const beatAnimation = keyframes`
    0%, 90% {
      transform: scale(1);
    }
    45% {
      transform: scale(1.4);
    }
  `;

  const aiClass = css`
    height: 1em;
    width: 1em;
    min-width: 1em;
    line-height: 1em;
    box-sizing: content-box;
    display: inline-block;
    position: relative;
    overflow: visible;
    vertical-align: 0;
    flex-shrink: 0;
    transition: inherit;
  `;

  const rotateClass = css`
    transform: rotate(${rotate}deg);
    transition: transform var(--ai-transition-duration, 0.2s)
      var(--ai-transition-timing-function, ease-in-out);
  `;

  const flipClass = css`
    transform: ${flip === "x"
      ? "scaleX(-1)"
      : flip === "y"
      ? "scaleY(-1)"
      : "scale(-1)"};
  `;

  const spinClass = css`
    animation-name: ${spinAnimation};
    animation-timing-function: var(--ai-animation-timing-function, linear);
    animation-duration: var(--ai-animation-duration, 2s);
    animation-iteration-count: var(--ai-animation-iteration-count, infinite);
  `;

  const spinPulseClass = css`
    --ai-animation-timing-function: steps(var(--ai-animation-pulse-steps, 8));
    --ai-animation-duration: 1s;
  `;

  const beatClass = css`
    animation-name: ${beatAnimation};
    animation-timing-function: var(--ai-animation-timing-function, ease-in-out);
    animation-duration: var(--ai-animation-duration, 1s);
    animation-iteration-count: var(--ai-animation-iteration-count, infinite);
  `;

  return (
    <span
      className={cx({
        [aiClass]: true,
        [rotateClass]: rotate !== null && rotate !== undefined,
        [flipClass]: !!flip,
        [spinClass]: !!spin,
        [spinPulseClass]: spin === "pulse",
        [beatClass]: beat
      })}
      {...props}
    >
      {HTMLReactParser(icon.data)}
    </span>
  );
}
