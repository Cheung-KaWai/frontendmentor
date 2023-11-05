import { useMediaQuery } from "usehooks-ts";
import { MiddleCutoutShape } from "./MiddleCutoutShape";
import styled from "styled-components";

export const Hero = () => {
  const tablet = useMediaQuery("(max-width: 768px)");
  return (
    <MiddleCutoutShape
      area="div2"
      left={tablet ? "calc(50% + 5px)" : "-2px"}
      padding="6rem 6rem"
      translate={tablet ? "-50%,0" : "0,-50%"}
      rotate={tablet ? "180deg" : "0"}
      top={tablet ? "-3px" : "50%"}
    >
      <Title>unleash your design skill feel render creativity with revange</Title>
    </MiddleCutoutShape>
  );
};

const Title = styled.h1`
  color: black;
`;
