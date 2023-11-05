import styled from "styled-components";

const data = [
  {
    name: "Planets info static website",
    link: "/planets",
    date: "October 2023",
  },
  {
    name: "Revange",
    link: "/revange",
    date: "WIP November 2023",
  },
  // {
  //   name: "Kanban task management webapplication (coming soon)",
  //   link: "/",
  //   date: "TBA",
  // },
];

function App() {
  return (
    <>
      <Container>
        <Heading>Practising my front-end skills</Heading>
        <ListContainer>
          {data.map((item, index) => (
            <Link
              href={item.link}
              key={index}
              number={index + 1}
              date={item.date}
            >
              {item.name}
            </Link>
          ))}
        </ListContainer>
      </Container>
    </>
  );
}

export default App;

const Container = styled.main`
  width: 100vw;
  height: 100vh;
  background-color: #f8f9fa;
  padding: max(1rem, 5vw);
`;

const Heading = styled.h1`
  font-family: Lato;
  font-weight: 400;
  color: #868e96;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 3rem;
  font-size: 1.8rem;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Link = styled.a<{ number: number; date: string }>`
  all: unset;
  padding: 1.5rem 0;
  cursor: pointer;
  color: #868e96;
  font-weight: 300;
  font-size: 1.6rem;
  padding-left: 3rem;
  position: relative;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  &::before {
    content: "0${(props) => props.number}";
    display: block;
    position: absolute;
    left: 0rem;
  }

  &::after {
    content: "${(props) => props.date}";
    display: block;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0.7;
    font-weight: 100;
    font-size: 1.4rem;
  }
`;
