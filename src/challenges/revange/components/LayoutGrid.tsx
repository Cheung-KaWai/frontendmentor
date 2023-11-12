import { ReactNode } from "react";
import styled from "styled-components";

export const LayoutGrid = ({ children }: { children?: ReactNode }) => {
  return <Container>{children}</Container>;
};

const Container = styled.main`
  display: grid;
  grid-template-columns: 3.25fr 3.25fr 5.15fr 2.5fr;
  grid-template-rows: 4rem 2fr 0.5fr 1fr;
  gap: 1rem;
  padding: 2rem;
  height: 100%;
  width: 100%;
  grid-template-areas:
    "logo log nav nav"
    "div1 div1 div2 div2"
    "div3 div4 div2 div2"
    "div3 div4 div5 div6";

  @media (width <= 768px) {
    grid-template-rows: 4rem 1.5fr 1.5fr 1fr 1fr;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    grid-template-areas:
      "logo log nav nav"
      "div1 div1 div1 div1"
      "div2 div2 div2 div2"
      "div3 div3 div4 div4"
      "div5 div5 div6 div6";
  }
`;
