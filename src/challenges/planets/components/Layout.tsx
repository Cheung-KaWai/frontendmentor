import styled from "styled-components";
import Menu from "./Menu";
import { breakPoints } from "../lib/design";

export default function Layout(props: any) {
  return (
    <Container>
      <Menu />
      <Content>{props.children}</Content>
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url("/assets/planets/background-stars.svg");
  background-size: contain;
`;

const Content = styled.div`
  padding: 5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 5rem 0;
  grid-template-areas:
    "header header header header"
    "planet planet planet content"
    "planet planet planet submenu"
    "stats stats stats stats";

  @media (width<=${breakPoints.laptop}) {
    grid-template-areas:
      "header header header header"
      "planet planet planet planet"
      "planet planet planet planet"
      "content content submenu submenu"
      "stats stats stats stats";
    gap: 5rem;
  }

  @media (width<=${breakPoints.tablet}) {
    padding: 3rem;
    grid-template-areas:
      "header header header header"
      "planet planet planet planet"
      "planet planet planet planet"
      "content content content content"
      "stats stats stats stats";
  }
`;
