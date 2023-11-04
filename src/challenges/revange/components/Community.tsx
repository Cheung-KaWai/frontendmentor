import { MiddleCutoutShape } from "./MiddleCutoutShape";
import styled from "styled-components";

export const Community = () => {
  return (
    <MiddleCutoutShape
      area="div1"
      rotate="180deg"
      right="-1px"
      noBorder={true}
    >
      <ContainreImage></ContainreImage>
    </MiddleCutoutShape>
  );
};

const ContainreImage = styled.div`
  width: 100%;
  height: 100%;
  background-color: red;
  border-radius: 3rem;
`;
