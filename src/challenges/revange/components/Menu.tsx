import styled from "styled-components";
import { colors } from "../../planets/lib/design";

export const Menu = () => {
  return (
    <MenuContainer>
      <Hamburger className="menu" />
      <MenuItemsContainer>
        <MenuItem className="menu">Home</MenuItem>
        <MenuItem className="menu">Categories</MenuItem>
        <MenuItem className="menu">App</MenuItem>
        <MenuItem className="menu">Community</MenuItem>
      </MenuItemsContainer>
    </MenuContainer>
  );
};

const Hamburger = styled.div`
  width: 5rem;
  height: 1em;
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    position: absolute;
    bottom: 0;
    left: 0;
    background-color: ${colors.specialblack};
    border-radius: 1rem;
  }

  &::after {
    content: "";
    display: block;
    width: 100%;
    height: 4px;
    position: absolute;
    top: 0;
    left: 0;
    background-color: ${colors.specialblack};
    border-radius: 1rem;
  }
`;

const MenuContainer = styled.nav`
  display: flex;
  grid-area: nav;
  align-items: center;
  justify-content: space-between;

  @media (width <= 768px) {
    justify-content: end;
  }
`;

const MenuItemsContainer = styled.div`
  display: flex;
`;

const MenuItem = styled.button`
  all: unset;
  cursor: pointer;
  border: 1px solid ${colors.specialblack};
  color: ${colors.specialblack};
  padding: 0 1.5rem;
  border-radius: 2rem;

  @media (width <= 768px) {
    display: none;
  }
`;
