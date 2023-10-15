import styled, { ThemeProvider } from "styled-components";
import { colors } from "../lib/design";

type ButtonProps = {
  text?: string;
  number: number;
  theme?: any;
};

export const Button = ({ text, number }: ButtonProps) => {
  return <DefaultButton number={number}>{text}</DefaultButton>;
};

export const ActiveButton = ({ text, number, theme }: ButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <DefaultButton number={number}>{text}</DefaultButton>
    </ThemeProvider>
  );
};

const DefaultButton = styled.button<ButtonProps>`
  color: ${colors.white};
  border: ${(props) => (props.theme.background === "transparent" ? "1px" : "0px")} solid rgba(255, 255, 255, 0.5);
  font-family: "League Spartan", sans-serif;
  height: 4.8rem;
  background-color: ${(props) => props.theme.background};
  padding-right: 2rem;
  font-size: 1.2rem;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 2.5rem;
  letter-spacing: 2.6px;
  cursor: pointer;

  &::before {
    content: "0${(props) => props.number}";
    color: rgba(255, 255, 255, 0.5);
    padding: 0 2.8rem;
  }

  &:hover {
    background-color: ${colors.darkGray};
    border-color: transparent;
  }
`;

DefaultButton.defaultProps = {
  theme: {
    background: "transparent",
  },
};
