import { ReactNode } from "react";
import styled from "styled-components";

type CutoutProps = {
  children?: ReactNode;
  top?: string;
  left?: string;
  rotate?: string;
};

export const MiddleCutoutShape = ({ top = "50%", left = "-1px", children, rotate = "0deg" }: CutoutProps) => {
  return (
    <CurvContainer
      top={top}
      left={left}
      rotate={rotate}
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
    transform: translate(0, -50%) rotate(${(props) => props.rotate});
    z-index: 1;
  }
`;
