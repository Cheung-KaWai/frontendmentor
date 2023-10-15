import styled from "styled-components";
import Menu from "./Menu";

export default function Layout() {
  return (
    <Container>
      <Menu />
    </Container>
  );
}

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-image: url("/assets/planets/background-stars.svg");
  background-size: contain;
`;
