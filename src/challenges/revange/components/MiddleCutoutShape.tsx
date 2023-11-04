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
};

export const MiddleCutoutShape = ({
  top = "50%",
  children,
  rotate = "0deg",
  area,
  left,
  right,
  noBorder,
}: CutoutProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { update, offsetHeight } = useRevangeStore((state) => state);

  useEffect(() => {
    const handleTopOffsetCalculation = () => {
      if (ref.current) {
        const offsetHeight = ref.current?.offsetHeight / 2;
        update("offsetHeight", offsetHeight + "px");
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
    >
      {children}
    </CurvContainer>
  );
};

const CurvContainer = styled.div<CutoutProps>`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
  grid-area: ${(props) => props.area};

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: ${(props) => (props.noBorder ? "1px solid transparent" : "1px solid black")};
    top: 0;
    left: 0;
    background-color: transparent;
    box-sizing: border-box;
    border-radius: 3rem;
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
