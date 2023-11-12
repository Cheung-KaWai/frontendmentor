import styled from "styled-components";
import { colors } from "../../planets/lib/design";

export const HomeButton = () => {
  return (
    <Container className="logo">
      <StyledImage src="/assets/revange/logo.svg" />
      revange
    </Container>
  );
};

const Container = styled.button`
  all: unset;
  background-color: ${colors.specialblack};
  text-transform: uppercase;
  grid-area: logo;
  width: fit-content;
  display: flex;
  align-items: center;
  padding: 2rem;
  gap: 1rem;
  border-radius: 3rem;
  font-size: 1.8rem;
`;

const StyledImage = styled.img`
  height: 1em;
  display: inline-block;
  position: relative;
  top: -2px;
`;
