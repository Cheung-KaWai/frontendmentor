import styled from "styled-components";
import { colors } from "../../planets/lib/design";

export const Join = () => {
  return (
    <Container>
      <Title>
        <StyledSpan>45K+</StyledSpan> Designers create visual magic
      </Title>
      <Button>Join to us</Button>
    </Container>
  );
};

const Title = styled.h3`
  font-size: 2rem;
  width: 50%;
  align-self: end;
  text-align: end;
  font-size: 1.4rem;
  line-height: 1.3em;
  font-weight: 400;
  padding: 1rem 0;

  @media (width <= 768px) {
    width: 100%;
  }
`;
const StyledSpan = styled.h3`
  display: block;
  font-size: 4rem;
  margin-bottom: 1rem;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  grid-area: div6;
  background-color: ${colors.specialblack};
  position: relative;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  padding: 2rem;
`;

const Button = styled.button`
  all: unset;
  margin-top: auto;
  padding: 0.5rem;
  border: 1px solid #fff;
  text-align: center;
  font-size: 1.6rem;
  font-weight: 300;
  border-radius: 3rem;
`;
