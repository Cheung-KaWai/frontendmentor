import styled from "styled-components";

type HeadingText = {
  text: string;
};

export const H1 = ({ text }: HeadingText) => {
  return <StyledHeading1>{text}</StyledHeading1>;
};
export const H2 = ({ text }: HeadingText) => {
  return <StyledHeading2>{text}</StyledHeading2>;
};
export const H3 = ({ text }: HeadingText) => {
  return <StyledHeading3>{text}</StyledHeading3>;
};
export const H4 = ({ text }: HeadingText) => {
  return <StyledHeading4>{text}</StyledHeading4>;
};

const StyledHeading1 = styled.h1`
  font-family: "Antonio", sans-serif;
  font-size: 8rem;
  font-weight: 500;
  line-height: 10.3rem;
`;

const StyledHeading2 = styled.h1`
  font-family: "Antonio", sans-serif;
  font-size: 4rem;
  font-weight: 500;
  line-height: 5.2rem;
  letter-spacing: -1.5px;
`;

const StyledHeading3 = styled.h1`
  font-family: "League Spartan", sans-serif;
  font-size: 1.2rem;
  font-weight: 600;
  line-height: 2.5rem;
  letter-spacing: 2.6px;
`;
const StyledHeading4 = styled.h1`
  font-family: "League Spartan", sans-serif;
  font-size: 1.1rem;
  font-weight: 600;
  line-height: 2.5rem;
  letter-spacing: 1px;
`;
