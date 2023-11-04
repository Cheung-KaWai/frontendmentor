import styled from "styled-components";
import { MiddleCutoutShape } from "./MiddleCutoutShape";
import { LayoutGrid } from "./LayoutGrid";

export const Revange = () => {
  return (
    <Container>
      <LayoutGrid>
        <MiddleCutoutShape
          area="div1"
          rotate="180deg"
          right="-1px"
          top="10rem"
        />
        <MiddleCutoutShape
          area="div2"
          left="-1px"
          top="10rem"
        />
      </LayoutGrid>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;
