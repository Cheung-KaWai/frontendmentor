import { ReactNode } from "react";
import styled from "styled-components";
import { GridAreaVisualiser } from "./GridAreaVisualiser";

export const LayoutGrid = ({ children }: { children?: ReactNode }) => {
  return (
    <Container>
      <GridAreaVisualiser
        color="red"
        area="logo"
      />
      {children}
      <GridAreaVisualiser
        color="green"
        area="div3"
      />
      <GridAreaVisualiser
        color="pink"
        area="div4"
      />
      <GridAreaVisualiser
        color="brown"
        area="div5"
      />
      <GridAreaVisualiser
        color="black"
        area="div6"
      />
    </Container>
  );
};

const Container = styled.main`
  display: grid;
  grid-template-columns: 3.25fr 3.25fr 5.15fr 2.5fr;
  grid-template-rows: 4rem auto;
  gap: 1rem;
  padding: 2rem;
  height: 100%;
  width: 100%;
  grid-template-areas:
    "logo log nav nav"
    "div1 div1 div2 div2"
    "div1 div1 div2 div2"
    "div1 div1 div2 div2"
    "div1 div1 div2 div2"
    "div3 div4 div2 div2"
    "div3 div4 div5 div6"
    "div3 div4 div5 div6";
`;
