import { useMediaQuery } from "usehooks-ts";
import { MiddleCutoutShape } from "./MiddleCutoutShape";
import styled from "styled-components";
import { colors } from "../../planets/lib/design";

export const Hero = () => {
  const tablet = useMediaQuery("(max-width: 768px)");
  return (
    <MiddleCutoutShape
      area="div2"
      left={tablet ? "calc(50% + 5px)" : "-2px"}
      padding="6rem clamp(2rem,10vw,8rem)"
      translate={tablet ? "-50%,0" : "0,-50%"}
      rotate={tablet ? "180deg" : "0"}
      top={tablet ? "-3px" : "50%"}
      className="hero"
    >
      <Title className="title">
        unleash your <StyledSpan> design skill feel </StyledSpan>
        <span> </span>render <span> </span>
        <StyledImage src="/assets/revange/herocircles.svg" /> creativity with revange
      </Title>
      <SubTitle className="subTitle">
        Community of visual storytellers,collaborate and showcase your stunning render artistry on the ultimate platform
        for render enthousiasts, revange
      </SubTitle>
    </MiddleCutoutShape>
  );
};

const Title = styled.h1`
  color: ${colors.specialblack};
  font-size: clamp(3.2rem, 6vw, 8rem);
  line-height: 1em;
  font-weight: 500;
  text-transform: uppercase;
`;

const StyledImage = styled.img`
  display: inline-block;
  height: 0.7em;
`;

const StyledSpan = styled.span`
  width: 7rem;
  display: inline-block;
  font-size: clamp(1rem, 2vw, 1.8rem);
  line-height: 1em;
  text-transform: none;
  text-align: right;
  font-family: "Courier New", Courier, monospace;
`;

const SubTitle = styled.h2`
  font-size: clamp(1.2rem, 3vw, 1.4rem);
  font-family: "Courier New", Courier, monospace;
  color: gray;
  line-height: 1em;
  font-weight: 200;
  margin-top: 2rem;
`;
