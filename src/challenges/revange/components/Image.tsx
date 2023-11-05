import styled from "styled-components";

export const Image = ({ src }: { src: string }) => {
  return <StyledImage src={src} />;
};

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2rem;
  filter: grayscale(100%);
`;
