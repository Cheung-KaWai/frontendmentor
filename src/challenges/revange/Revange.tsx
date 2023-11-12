import styled from "styled-components";
import { LayoutGrid } from "./components/LayoutGrid";
import { Community } from "./components/Community";
import { CircleText } from "./components/CircleText";
import { Hero } from "./components/Hero";
import { TopCase } from "./components/TopCase";
import { Product } from "./components/Product";
import { Join } from "./components/Join";
import { Categories } from "./components/Categories";
import { HomeButton } from "./components/HomeButton";
import { Menu } from "./components/Menu";
import { Animation } from "./components/Animation";

export const Revange = () => {
  return (
    <Container>
      <LayoutGrid>
        <HomeButton />
        <Menu />
        <Community />
        <Hero />
        <TopCase />
        <Product />
        <Categories />
        <Join />
        <Animation />
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
  overflow: hidden;

  @media (width <= 768px) {
    height: 225vh;
  }
`;
