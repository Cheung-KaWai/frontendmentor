import { MiddleCutoutShape } from "./MiddleCutoutShape";
import styled from "styled-components";

export const Community = () => {
  return (
    <MiddleCutoutShape
      area="div1"
      rotate="180deg"
      right="-2px"
      noBorder={true}
    >
      <CircleImage src="/assets/revange/plates.jpg" />
    </MiddleCutoutShape>
  );
};

const CircleImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(100%);
  border-radius: 2rem;
`;
