import { ReactNode, useEffect, useRef } from "react";
import styled from "styled-components";
import { useRevangeStore } from "./store/useRevange";

type CutoutProps = {
  children?: ReactNode;
  top?: string;
  left?: string;
  right?: string;
  rotate?: string;
  area: string;
};

export const MiddleCutoutShape = ({ top = "50%", left, children, rotate = "0deg", area, right }: CutoutProps) => {
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
      top={offsetHeight}
      left={left}
      right={right}
      rotate={rotate}
      area={area}
      ref={ref}
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
    border: 1px solid black;
    top: 0;
    left: 0;
    background-color: white;
    box-sizing: border-box;
    border-radius: 3rem;
  }

  &::after {
    content: url("/assets/revange/curve.svg");
    display: block;
    position: absolute;
    top: ${(props) => props.top};
    left: ${(props) => props.left};
    right: ${(props) => props.right};
    transform: translate(0, -50%) rotate(${(props) => props.rotate});
    z-index: 1;
    line-height: 0;
  }
`;
