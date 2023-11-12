import styled from "styled-components";
import { BsArrowUpRight } from "react-icons/bs";
import { colors } from "../../planets/lib/design";

export const PillButton = () => {
  return (
    <Container>
      <p>Categories</p>
      <BsArrowUpRight />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  background-color: ${colors.specialblack};
  gap: 0.5rem;
  top: 0;
  left: 0;
  z-index: 1;
  height: 2.9rem;
  width: 10.4rem;
  padding: 0.1rem 1rem;
  border-radius: 1.5rem;
  font-weight: 300;
  font-size: 1.4rem;
`;
