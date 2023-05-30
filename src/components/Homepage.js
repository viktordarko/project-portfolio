import { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import { languages, countriesLived } from "../data";
import ListItem from "./ListItems";

const Homepage = () => {
  const [isBlinking, setisBlinking] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setisBlinking(!isBlinking);
    }, 1000);
    return () => clearInterval(interval);
  }, [isBlinking]);
  const languagesArray = Object.values(languages);
  const countriesLivedArray = Object.values(countriesLived)
  return (
    <>
      <BlinkingH1>HI!</BlinkingH1>
      <MainDiv>
        <h2>My name is Victor Vargas,</h2>
        <MainParagraph>I am currently a full-stack web developer student, you can click on the links above to find out more about me.</MainParagraph>
        <MainParagraph>I have many hobbies, love listening to music and traveling, and also enjoy coding, reading and watching series.</MainParagraph>
        <MainParagraph>I speak the following languages:</MainParagraph>
        {languagesArray.map((language) => {
          return <ListItem item={language} key={language.id}/>;
        })}

        <MainParagraph>I have lived and worked in these countries:</MainParagraph>
      {countriesLivedArray.map((country) => {
        return <ListItem item={country} key={country.id}/>;
      }
      
      )

      }
      </MainDiv>
    </>
  );
};
export default Homepage;

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
  font-size: 3rem;
  margin-left: 1em;
padding-top: 1em;
animation: ${blinkAnimation} 1s infinite;
`;

const MainDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 3vw;
`;

const MainParagraph = styled.p`
margin-top: 1em;
margin-bottom: .5em;
`

export {BlinkingH1}