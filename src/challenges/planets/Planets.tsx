import styled from "styled-components";
import Layout from "./components/Layout";
import { usePlanetStore } from "./store/usePlanetStore";
import useData from "./hooks/useData";
import { H1, H4 } from "./components/Headings";
import { ActiveButton, Button } from "./components/Buttons";
import { breakPoints, colors } from "./lib/design";
// import { colors } from "./lib/design";

const subMenuItems = [
  {
    name: "overview",
    value: "overview",
  },
  {
    name: "internal structure",
    value: "structure",
  },
  {
    name: "surface geology",
    value: "geology",
  },
];

export default function Website() {
  const { planet, step } = usePlanetStore((state) => state);
  const update = usePlanetStore((state) => state.update);
  const data = useData();
  const currentPlanet = data.find((x) => x.name === planet);
  const body: any = currentPlanet?.[step as keyof typeof currentPlanet];

  return (
    <Layout>
      <ImageContainer>
        <Planet src={step === "overview" ? currentPlanet?.images.planet : currentPlanet?.images.internal} />
        <Planet
          src={currentPlanet?.images.geology}
          position="absolute"
          width="15rem"
          top="65%"
          left="50%"
          transform="translateX(-50%)"
          show={step === "geology" ? "block" : "none"}
        />
      </ImageContainer>

      <Body>
        <H1 text={currentPlanet?.name} />
        <p>{body?.content}</p>
        <LinkText>
          Source: <Link href={body.source}>Wikipedia</Link>
        </LinkText>
      </Body>
      <SubmenuContainer>
        {subMenuItems.map((item, index) => {
          if (step === item.value) {
            return (
              <ActiveButton
                number={index + 1}
                key={index}
                text={item.name}
                theme={{
                  background: colors[planet.toLocaleLowerCase() as keyof typeof colors].toString(),
                }}
                onClick={() => update("step", item.value)}
              />
            );
          } else {
            return (
              <Button
                number={index + 1}
                text={item.name}
                key={index}
                onClick={() => update("step", item.value)}
              />
            );
          }
        })}
      </SubmenuContainer>
      <StatsContainer>
        <Stat>
          <H4 text="rotation time" />
          <StatValue>{currentPlanet?.rotation}</StatValue>
        </Stat>
        <Stat>
          <H4 text="revolution time" />
          <StatValue>{currentPlanet?.revolution}</StatValue>
        </Stat>
        <Stat>
          <H4 text="radius" />
          <StatValue>{currentPlanet?.radius}</StatValue>
        </Stat>
        <Stat>
          <H4 text="average temp." />
          <StatValue>{currentPlanet?.temperature}</StatValue>
        </Stat>
      </StatsContainer>
    </Layout>
  );
}

type PlanetProps = {
  position?: string;
  top?: string;
  left?: string;
  transform?: string;
  width?: string;
  show?: string;
};

const Planet = styled.img<PlanetProps>`
  width: ${(props) => props.width};
  position: ${(props) => props.position};
  top: ${(props) => props.top};
  left: ${(props) => props.left};
  transform: ${(props) => props.transform};
  display: ${(props) => props.show};
`;

const SubmenuContainer = styled.div`
  grid-area: submenu;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  @media (width<=${breakPoints.laptop}) {
    justify-content: center;
  }

  @media (width<=${breakPoints.tablet}) {
    display: none;
  }
`;

const ImageContainer = styled.div`
  grid-area: planet;
  align-self: center;
  justify-self: center;
  position: relative;
`;

const Body = styled.section`
  grid-area: content;
  display: flex;
  flex-direction: column;
  gap: 3rem;
`;

const LinkText = styled.p`
  color: rgba(255, 255, 255, 0.5);
`;

const Link = styled.a`
  color: rgba(255, 255, 255, 0.5);
  font-weight: 600;
  font-size: 1.4rem;
`;

const StatsContainer = styled.section`
  grid-area: stats;
  display: flex;
  gap: 3rem;

  @media (width<=${breakPoints.tablet}) {
    flex-direction: column;
    gap: 1rem;
  }
`;

const Stat = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.5);
  width: 100%;
  padding: 2rem;

  @media (width<=${breakPoints.tablet}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

const StatValue = styled.p`
  font-family: "Antonio", sans-serif;
  font-size: 4rem;
  font-weight: 500;
  line-height: 5.2rem;
  letter-spacing: -1.5px;

  @media (width<=${breakPoints.laptop}) {
    font-size: 2.4rem;
    line-height: normal;
  }

  @media (width<=${breakPoints.tablet}) {
    font-size: 2rem;
  }
`;
