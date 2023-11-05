import styled from "styled-components";

type GridAreaProps = {
  color: string;
  area: string;
};

export const GridAreaVisualiser = (props: GridAreaProps) => {
  return <Container {...props}></Container>;
};

const Container = styled.div<GridAreaProps>`
  width: 100%;
  height: 100%;
  grid-area: ${(props) => props.area};
  background-color: ${(props) => props.color};
  position: relative;

  &::before {
    content: url("/assets/revange/cornerCutout.svg");
    display: block;
    position: absolute;
    top: 0;
    right: 0;
  }
`;
