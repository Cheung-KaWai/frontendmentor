import styled from "styled-components";
import { MiddleCutoutShape } from "./components/MiddleCutoutShape";
import { LayoutGrid } from "./components/LayoutGrid";
import { Community } from "./components/Community";

export const Revange = () => {
  return (
    <Container>
      <LayoutGrid>
        <Community />
        <MiddleCutoutShape
          area="div2"
          left="-1px"
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
