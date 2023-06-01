import styled, { keyframes, css } from "styled-components";
import { experience } from "../data";
import { useState } from "react";

const Experience = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [turningOff, setTurningOff] = useState(false);

  const experiencearray = Object.values(experience);

  const hasPrevious = index > 0;
  const hasNext = index < experiencearray.length - 1;

  function handlePreviousClick() {
    if (hasPrevious) {
      setIndex(index - 1);
    }
  }

  function handleNextClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  function handleMoreClick() {
    if (showMore) {
      setTurningOff(true);
      setTimeout(() => {
        setShowMore(false);
        setTurningOff(false);
      }, 490);
    } else {
      setShowMore(true);
    }
  }
  const previewingJob = experiencearray[index];

  return (
    <>
      <ExperienceTitle>These are some of the places where I have worked</ExperienceTitle>
      <ExperienceSubtitle>For a full list, go to linkedIn on the contact page</ExperienceSubtitle>

      <StyledCard>
        <ButtonDiv>
          <StyledButton onClick={handlePreviousClick} disabled={!hasPrevious}>
            Previous
          </StyledButton>
          <StyledButton onClick={handleNextClick} disabled={!hasNext}>
            Next
          </StyledButton>
        </ButtonDiv>

        <CarouselDiv>
          <TitleExperience>
            {previewingJob.company}{" "}
            <ItalicSpan> in {previewingJob.country} </ItalicSpan>{" "}
          </TitleExperience>
          <ImageExperience src={previewingJob.imgSrc} />
          <ShowMoreButton onClick={handleMoreClick}>
            {!showMore ? "Show More Info..." : "Hide Info"}{" "}
          </ShowMoreButton>
          {showMore && (
            <MoreInfoDiv showMore={showMore} turningOff={turningOff}>
              <Subtitle>
                From {previewingJob.period} I worked as {previewingJob.title}{" "}
              </Subtitle>
              <p>{previewingJob.moreInfo}</p>
            </MoreInfoDiv>
          )}
        </CarouselDiv>
      </StyledCard>
    </>
  );
};
export default Experience;

const ExperienceTitle = styled.p`
  font-size: 2em;
  margin-left: 1em;
  padding-top: 1em;
`
const ExperienceSubtitle = styled(ExperienceTitle)`
font-size: 1.2em;
margin-left: 3em;

`

const ButtonDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const CarouselDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledCard = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  margin: 2em auto;
  justify-content: space-between;
`;
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const MoreInfoDiv = styled.div`
  margin: 1.3em auto;
  width: 95%;
  ${({ showMore }) =>
    showMore &&
    css`
      animation: ${fadeIn} 0.5s;
    `};
  ${({ turningOff }) =>
    turningOff &&
    css`
      animation: ${fadeOut} 0.5s;
    `};
`;

const ImageExperience = styled.img`
  width: 80%;
  margin: 1em 0;
  align-self: center;
`;
const Subtitle = styled.h2`
  margin-bottom: 0.4em;
`;
const TitleExperience = styled.h2`
  color: var(--accent-color);
  margin: 0.6em 0 0.2em 0;
`;
const ItalicSpan = styled.span`
  font-style: italic;
  color: var(--accent-color);
`;

const StyledButton = styled.button`
  font-size: 1em;
  letter-spacing: 1px;
  text-decoration: none;
  text-transform: uppercase;
  color: #000;
  cursor: pointer;
  border: 3px solid;
  padding: 0.25em 0.5em;
  box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px,
    5px 5px 0px 0px;
  position: relative;

  ${(props) =>
    props.disabled &&
    css`
      opacity: 0.5;
      box-shadow: 0px 0px 0px 0px;
      top: 5px;
      left: 5px;
    `}

  ${(props) =>
    !props.disabled &&
    css`
      &:active {
        box-shadow: 0px 0px 0px 0px;
        top: 5px;
        left: 5px;
      }
    `}

@media (min-width: 700px) {
    .button-54 {
      padding: 0.25em 0.75em;
    }
  }
`;

/* CSS */
const ShowMoreButton = styled.button`
  all: unset;
  width: 100px;
  height: 30px;
  font-size: 16px;
  background: transparent;
  border: none;
  position: relative;
  color: #f0f0f0;
  cursor: pointer;
  z-index: 1;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &::after,
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    z-index: -99999;
    transition: all 0.4s;
  }

  &::before {
    transform: translate(0%, 0%);
    width: 100%;
    height: 100%;
    background: #28282d;
    border-radius: 10px;
  }

  &::after {
    transform: translate(10px, 10px);
    width: 35px;
    height: 35px;
    background: #ffffff15;
    backdrop-filter: blur(5px);
    -webkit-backdrop-filter: blur(5px);
    border-radius: 50px;
  }

  &:hover::before {
    transform: translate(5%, 20%);
    width: 110%;
    height: 110%;
  }

  &:hover::after {
    border-radius: 10px;
    transform: translate(0, 0);
    width: 100%;
    height: 100%;
  }

  &:active::after {
    transition: 0s;
    transform: translate(0, 5%);
  }
`;
