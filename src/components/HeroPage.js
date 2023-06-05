import Slide from "@mui/material/Slide";
import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { MainSectionTitle } from "./Experience";

const HeroPage = () => {

    const [isBlinking, setisBlinking] = useState(true);
    useEffect(() => {
      const interval = setInterval(() => {
        setisBlinking(!isBlinking);
      }, 1000);
      return () => clearInterval(interval);
    }, [isBlinking]);

    return (
        <MainDiv>
        <BlinkingH1>HI!</BlinkingH1>
        <Slide in={true} easing={"ease"} direction="left" timeout={2000}>
        <HeroTitle>My name is Victor Vargas,</HeroTitle>
        </Slide>
        <MainParagraph>
          I am currently a full-stack web developer student, you can click on
          the links above to find out more about me.
        </MainParagraph>
        <MainParagraph>
          I have many hobbies, love listening to music and traveling, and also
          enjoy coding, reading and watching series.
        </MainParagraph>
        </MainDiv>
    )
}

export default HeroPage

const blinkAnimation = keyframes`
0% {
    opacity: 1;
}
50% {
    opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const BlinkingH1 = styled.h1`
  font-size: 3em;
  margin-left: 1em;
  padding-top: 1em;
  animation: ${blinkAnimation} 1s infinite;

  @media only screen and (max-width: 700px) {
    font-size: 2em;
  }
`;
const HeroTitle = styled(MainSectionTitle)`
margin-left: 0;
`
const MainParagraph = styled.p`
  margin-top: 1em;
  margin-bottom: 0.5em;
`;

const MainDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3vw;
`;

export { BlinkingH1, MainParagraph };