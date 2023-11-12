import { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import { useRevangeStore } from "../store/useRevange";
import { useMediaQuery } from "usehooks-ts";

type CutoutProps = {
  children?: ReactNode;
  top?: string;
  left?: string;
  right?: string;
  rotate?: string;
  area: string;
  noBorder?: boolean;
  svgImage?: string;
  padding?: string;
  bottom?: string;
  translate?: string;
  className?: string;
};

export const MiddleCutoutShape = ({
  top = "50%",
  children,
  rotate = "0deg",
  area,
  left,
  right,
  noBorder,
  padding,
  bottom,
  translate = "0,-50%",
  className,
}: CutoutProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { update, offsetHeight } = useRevangeStore((state) => state);
  const tablet = useMediaQuery("(max-width: 768px)");
  const src = tablet
    ? noBorder
      ? "curveHorizontalNoBorder.svg"
      : "curveHorizontal.svg"
    : noBorder
    ? "curveNoBorder.svg"
    : "curve.svg";
  useEffect(() => {
    const handleTopOffsetCalculation = () => {
      if (ref.current) {
        const offsetHeight = ref.current?.offsetHeight / 2;
        const offsetWidth = ref.current?.offsetWidth;
        update("offsetHeight", offsetHeight);
        update("offsetWidth", offsetWidth);
      }
    };

    if (area === "div1") {
      handleTopOffsetCalculation();
      window.addEventListener("resize", handleTopOffsetCalculation);
    }

    return () => {
      window.removeEventListener("resize", handleTopOffsetCalculation);
    };
  }, []);

  return (
    <CurvContainer
      top={area === "div2" && !tablet ? offsetHeight + "px" : top}
      rotate={rotate}
      area={area}
      ref={ref}
      left={left}
      right={right}
      noBorder={noBorder}
      svgImage={"assets/revange/" + src}
      padding={padding}
      bottom={bottom}
      translate={translate}
      className={className}
    >
      {children}
    </CurvContainer>
  );
};

const CurvContainer = styled.div<CutoutProps>`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 2rem;
  overflow: hidden;
  grid-area: ${(props) => props.area};
  padding: ${(props) => props.padding};

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: ${(props) => (props.noBorder ? "2px solid transparent" : "2px solid #495057")};
    top: 0;
    left: 0;
    background-color: transparent;
    box-sizing: border-box;
    border-radius: 2rem;
  }

  &::after {
    content: url("${(props) => props.svgImage}");
    display: block;
    position: absolute;
    top: ${(props) => props.top};
    bottom: ${(props) => props.bottom};
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    transform: translate(${(props) => props.translate}) rotate(${(props) => props.rotate});
    line-height: 0;
  }
`;
