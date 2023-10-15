import styled, { ThemeProvider } from "styled-components";
import useData from "../hooks/useData";
import { usePlanetStore } from "../store/usePlanetStore";
import { breakPoints, colors } from "../lib/design";
import { useState } from "react";

export default function Menu() {
  const [showMenu, setShowMenu] = useState(false);

  const data = useData();
  const update = usePlanetStore((state) => state.update);

  const handlePlanet = (value: any) => {
    update("planet", value);
  };

  return (
    <MenuContainer>
      <Title>the planets</Title>
      <ListContainer showMenu={showMenu}>
        {data.map((planet) => (
          <ThemeProvider theme={{ hover: colors[planet.name.toLowerCase() as keyof typeof colors] }}>
            <NavItem onClick={() => handlePlanet(planet.name)}>{planet.name}</NavItem>
          </ThemeProvider>
        ))}
      </ListContainer>
      <Hamburger
        src="/assets/planets/hamburger.svg"
        alt="hamburger icon"
        onClick={() => setShowMenu((prev) => !prev)}
      />
    </MenuContainer>
  );
}

const MenuContainer = styled.nav`
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  display: grid;
  grid-template-columns: auto 1fr;
  padding: 0 3rem;
  position: relative;

  @media (width <= ${breakPoints.laptop}) {
    grid-template-columns: 1fr;
    gap: 3rem;
    padding: 3rem;
  }
`;

const ListContainer = styled.ul<{ showMenu: boolean }>`
  width: 100%;
  align-self: center;
  display: flex;
  list-style: none;
  gap: 3.2rem;
  justify-content: end;
  @media (width <= ${breakPoints.laptop}) {
    justify-content: center;
  }

  @media (width <= ${breakPoints.tablet}) {
    flex-direction: column;
    position: absolute;
    top: 8.6rem;
    padding: 0 3rem;
    gap: 0;
    display: ${(props) => (props.showMenu ? "block" : "none")};
  }
`;

const NavItem = styled.li`
  position: relative;
  font-family: "League Spartan", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 2.5rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.75);
  cursor: pointer;
  padding: 3rem 0.5rem;
  border-top: 4px solid transparent;

  &:hover {
    border-top: 4px solid ${(props) => props.theme.hover};
  }

  @media (width <= ${breakPoints.laptop}) {
    padding: 0.5rem;
    padding-bottom: 0;
  }

  @media (width <= ${breakPoints.tablet}) {
    padding: 2rem 0 2rem 4rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);

    &::before {
      content: "";
      display: block;
      width: 1.5rem;
      height: 1.5rem;
      border-radius: 50%;
      background-color: ${(props) => props.theme.hover};
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }

    &::after {
      content: url("/assets/planets/rightArrow.svg");
      display: block;
      position: absolute;
      top: 50%;
      right: 3rem;
      transform: translateY(-50%);
    }

    &:hover {
      border-top: 4px solid transparent;
    }
  }
`;

NavItem.defaultProps = {
  theme: {
    hover: "transparent",
  },
};

const Title = styled.p`
  font-family: "Antonio", sans-serif;
  font-size: 2.8rem;
  font-weight: 500;
  align-self: center;
  text-transform: uppercase;
  @media (width <=${breakPoints.laptop}) {
    text-align: center;
  }

  @media (width <=${breakPoints.tablet}) {
    text-align: left;
  }
`;

const Hamburger = styled.img`
  width: 3rem;
  object-fit: contain;
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 3rem;
  display: none;
  cursor: pointer;

  @media (width <=${breakPoints.tablet}) {
    display: block;
  }
`;
