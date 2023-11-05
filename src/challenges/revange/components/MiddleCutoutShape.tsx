import { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import { useRevangeStore } from "../store/useRevange";

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
}: CutoutProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { update, offsetHeight } = useRevangeStore((state) => state);

  useEffect(() => {
    const handleTopOffsetCalculation = () => {
      if (ref.current) {
        const offsetHeight = ref.current?.offsetHeight / 2;
        const offsetWidth = ref.current?.offsetWidth;
        update("offsetHeight", offsetHeight + "px");
        update("offsetWidth", offsetWidth + "px");
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
      top={area === "div2" ? offsetHeight : top}
      rotate={rotate}
      area={area}
      ref={ref}
      left={left}
      right={right}
      noBorder={noBorder}
      svgImage={noBorder ? "assets/revange/curveNoBorder.svg" : "assets/revange/curve.svg"}
      padding={padding}
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
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    transform: translate(0, -50%) rotate(${(props) => props.rotate});
    line-height: 0;
  }
`;
