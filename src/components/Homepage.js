import styled from "styled-components";
import { languages, countriesLived } from "../data";
import ListItem from "./ListItem";
import { MainParagraph } from "./HeroPage";

const Homepage = () => {

  const languagesArray = Object.values(languages);
  const countriesLivedArray = Object.values(countriesLived);
  return (
    <>
        <SecondaryDiv>
          <MainParagraph>I speak the following languages:</MainParagraph>
          <LanguageDiv>
            {languagesArray.map((language) => {
              return <ListItem item={language} key={language.id} />;
            })}
          </LanguageDiv>
          <MainParagraph>
            I have lived and worked in these countries:
          </MainParagraph>
          <CountryDiv>
            {countriesLivedArray.map((country) => {
              return <ListItem item={country} key={country.id} />;
            })}
          </CountryDiv>
        </SecondaryDiv>
    </>
  );
};
export default Homepage;



const SecondaryDiv = styled.div`
  display: grid;
  border-top: 1px dashed black;
  margin: 3vw;
  margin-top: 0.5em;
  padding-top: 0.5em;
  grid-template-columns: repeat(2, 1fr);
  grid-template-areas:
    "main main"
    "language country";
`;

const LanguageDiv = styled.div`
  grid-area: language;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;

const CountryDiv = styled.div`
  grid-area: country;
  justify-content: space-between;
  display: flex;
  flex-direction: column;
`;

