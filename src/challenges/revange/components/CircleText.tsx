import styled from "styled-components";
import { useRevangeStore } from "../store/useRevange";
import { colors } from "../../planets/lib/design";

type CircleTextProps = {
  offsetHeight: number;
  offsetWidth: number;
};

type LetterProps = {
  rotation: number;
};

export const CircleText = () => {
  const { offsetWidth, offsetHeight } = useRevangeStore((state) => state);
  const text = "Render Space - render space - render space - ".split("");
  return (
    <Container
      offsetWidth={offsetWidth}
      offsetHeight={offsetHeight}
    >
      <CircleContainer>
        {text.map((letter, key) =>
          letter === "-" ? (
            <DotLetter
              key={key}
              rotation={(360 / text.length) * key}
            >
              {letter}
            </DotLetter>
          ) : (
            <Letter
              key={key}
              rotation={(360 / text.length) * key}
            >
              {letter}
            </Letter>
          )
        )}
        <PlayButton className="circleButton"></PlayButton>
      </CircleContainer>
    </Container>
  );
};

// const Triangle = styled.img`
//   width: 50%;
//   object-fit: cover;
//   position: relative;
//   top: -3px;
//   transform: rotate(45deg);
// `;

const PlayButton = styled.div`
  width: 5rem;
  aspect-ratio: 1;
  background-color: ${colors.specialblack};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Container = styled.div<CircleTextProps>`
  position: absolute;
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  top: calc(${(props) => props.offsetHeight + "px"} + 70px);
  left: calc(${(props) => props.offsetWidth + "px"} + 25px);
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 3;

  @media (width<=768px) {
    top: calc(${(props) => props.offsetHeight * 2 + "px"} + 74px);
    left: calc(${(props) => props.offsetWidth / 2 + "px"} + 25px);
  }
`;

const CircleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(15deg);
  position: relative;
`;

const Letter = styled.span<LetterProps>`
  position: absolute;
  height: 100%;
  font-family: monospace;
  font-size: 0.8rem;
  text-transform: uppercase;
  color: black;
  /* background-color: red; */
  transform: rotate(${(props) => props.rotation + "deg"});
`;

const DotLetter = styled(Letter)`
  &::before {
    content: "";
    display: block;
    width: 100%;
    aspect-ratio: 1;
    background-color: black;
    position: absolute;
    top: 1rem;
    border-radius: 50%;
  }
`;
