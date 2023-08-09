import { IAmaranthIcon } from ".";
import { Box, SxProps } from "@mui/system";
import { keyframes } from "@emotion/react";
import HTMLReactParser from "html-react-parser";

interface ValkyrieProps {
  icon: IAmaranthIcon;
  rotate?: 0 | 90 | 180 | 270 | false;
  flip?: true | "x" | "y" | false;
  spin?: boolean;
  sx?: SxProps;
}

export default function ValkyrieIcon({
  flip = false,
  icon,
  rotate = 0,
  spin = false,
  sx,
  ...props
}: ValkyrieProps) {
  const spinAnimation = keyframes`
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  `;

  return (
    <Box
      {...props}
      component="span"
      sx={[
        {
          height: "1em",
          width: "1em",
          minWidth: "1em",
          lineHeight: 1,
          boxSizing: "content-box",
          display: "inline-block",
          position: "relative",
          overflow: "visible",
          verticalAlign: 0,
          flexShrink: 0,
          transition: "inherit",
          transform: `rotate(${rotate}deg)`,
        },
        spin && {
          svg: {
            animation: `${spinAnimation} var(--vi-animation-duration, 2s) infinite linear`,
          },
        },
        flip && {
          transform:
            flip === "x"
              ? "scaleX(-1)"
              : flip === "y"
              ? "scaleY(-1)"
              : "scale(-1)",
        },
        ...(Array.isArray(sx) ? sx : [sx])
      ]}
      >
        {HTMLReactParser(icon.data)}
      </Box>
  );
}
