import styled from "styled-components";
import { CornerCutoutShape } from "./CornerCutoutShape";
import { PillButton } from "./PillButton";

export const Categories = () => {
  return (
    <CornerCutoutShape
      area="div5"
      top="0"
      left="0"
      bgColor="#e9ecef"
      className="category"
    >
      <PillButton />
      <BackgroundImage src="/assets/revange/orangeCircle.jpg" />
    </CornerCutoutShape>
  );
};

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2rem;
  filter: grayscale(100%);
`;
