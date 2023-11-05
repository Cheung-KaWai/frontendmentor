import { MiddleCutoutShape } from "./MiddleCutoutShape";
import styled from "styled-components";

export const Hero = () => {
  return (
    <MiddleCutoutShape
      area="div2"
      left="-2px"
      padding="6rem 6rem"
    >
      <Title>unleash your design skill feel render creativity with revange</Title>
    </MiddleCutoutShape>
  );
};

const Title = styled.h1`
  color: black;
`;
