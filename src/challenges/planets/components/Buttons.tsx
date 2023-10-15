import styled, { ThemeProvider } from "styled-components";
import { colors } from "../lib/design";

type ButtonProps = {
  text?: string;
  number: number;
  theme?: any;
  onClick?: any;
};

export const Button = ({ text, number, onClick }: ButtonProps) => {
  return (
    <DefaultButton
      number={number}
      onClick={onClick}
    >
      {text}
    </DefaultButton>
  );
};

export const ActiveButton = ({ text, number, theme, onClick }: ButtonProps) => {
  return (
    <ThemeProvider theme={theme}>
      <DefaultButton
        number={number}
        onClick={onClick}
      >
        {text}
      </DefaultButton>
    </ThemeProvider>
  );
};

const DefaultButton = styled.button<ButtonProps>`
  color: ${colors.white};
  border: 1px solid
    ${(props) => (props.theme.background === "transparent" ? " rgba(255, 255, 255, 0.5)" : "transparent")};
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
  text-align: left;

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
