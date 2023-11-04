import styled from "styled-components";
import { MiddleCutoutShape } from "./MiddleCutoutShape";
import { LayoutGrid } from "./LayoutGrid";

export const Revange = () => {
  return (
    <Container>
      <LayoutGrid />
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CurvContainer = styled.div`
  width: 50vw;
  height: 50vh;
  /* border: 5px solid black; */
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    top: 0;
    left: 0;
    background-color: white;
    box-sizing: border-box;
    border-radius: 3rem;
  }

  &::after {
    content: url("/assets/revange/curve.svg");
    display: block;
    /* width: 10rem;
    height: 15rem;
    background-color: green;
    border: 5px solid black;
    border-radius: 50%; */
    position: absolute;
    top: 50%;
    left: -1px;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
`;

const CurveShape = styled.img`
  object-fit: fill;
  width: 100%;
  height: 100%;
`;
