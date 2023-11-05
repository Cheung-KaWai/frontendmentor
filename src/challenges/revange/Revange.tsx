import styled from "styled-components";
import { LayoutGrid } from "./components/LayoutGrid";
import { Community } from "./components/Community";
import { CircleText } from "./components/CircleText";
import { Hero } from "./components/Hero";

export const Revange = () => {
  return (
    <Container>
      <LayoutGrid>
        <Community />
        <Hero />
      </LayoutGrid>
      <CircleText />
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
