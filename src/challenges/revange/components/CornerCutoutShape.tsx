import { ReactNode } from "react";
import styled from "styled-components";

type CornerCutoutProps = {
  area: string;
  top?: string;
  bottom?: string;
  right?: string;
  left?: string;
  type?: string;
  rotation?: string;
  svgImage?: string;
  children?: ReactNode;
  bgColor?: string;
  className?: string;
};

export const CornerCutoutShape = ({ children, ...props }: CornerCutoutProps) => {
  return (
    <Container
      {...props}
      svgImage={props.type === "square" ? "/assets/revange/cornerCutout.svg" : "/assets/revange/longCornerCutout.svg"}
    >
      {children}
    </Container>
  );
};
const Container = styled.div<CornerCutoutProps>`
  width: 100%;
  height: 100%;
  grid-area: ${(props) => props.area};
  position: relative;
  background-color: ${(props) => props.bgColor};
  border-radius: 2rem;

  &::before {
    content: url(${(props) => props.svgImage});
    grid-area: ${(props) => props.area};
    display: block;
    position: absolute;
    top: ${(props) => props.top};
    right: ${(props) => props.right};
    left: ${(props) => props.left};
    bottom: ${(props) => props.bottom};
    transform: rotate(${(props) => props.rotation});
    z-index: 1;
  }
`;
