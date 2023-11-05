import styled from "styled-components";
import { useRevangeStore } from "../store/useRevange";

type CircleTextProps = {
  offsetHeight: string;
  offsetWidth: string;
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
      </CircleContainer>
    </Container>
  );
};

const Container = styled.div<CircleTextProps>`
  position: absolute;
  width: 11rem;
  height: 11rem;
  border-radius: 50%;
  top: calc(${(props) => props.offsetHeight} + 70px);
  left: calc(${(props) => props.offsetWidth} + 25px);
  transform: translate(-50%, -50%);
  overflow: hidden;
  z-index: 3;
`;

const CircleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(15deg);
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
