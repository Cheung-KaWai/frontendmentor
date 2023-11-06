import styled from "styled-components";
import { BsArrowUpRight } from "react-icons/bs";

export const CornerButton = ({ black }: { black: boolean }) => {
  return (
    <Container black={black}>
      <BsArrowUpRight
        size="2.4rem"
        color={black ? "white" : "black"}
      />
    </Container>
  );
};

const Container = styled.div<{ black: boolean }>`
  width: 4rem;
  aspect-ratio: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 0.6rem;
  top: 0.6rem;
  z-index: 3;
  background-color: ${(props) => (props.black ? "black" : "white")};
  transform: rotate(${(props) => (props.black ? "0" : "180deg")});
  border-radius: 50%;
  border: 1px solid black;
`;
