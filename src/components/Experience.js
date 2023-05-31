import styled, {keyframes, css}from "styled-components";
import { experience } from "../data";
import { useState } from "react";

const Experience = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const [turningOff, setTurningOff] = useState(false)

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
        setTurningOff(true)
        setTimeout(() => {
            setShowMore(false);
            setTurningOff(false)    
        }, 490);
        
    } else {
        setShowMore(true);
    }
  }
  const previewingJob = experiencearray[index];

  return (
    <>
      <h1>These are some of the places where I have worked</h1>
      <p>For a full list, go to linkedIn on the contact page</p>

      <StyledCard>

        <ButtonDiv>
          <button onClick={handlePreviousClick} disabled={!hasPrevious}>
            Previous
          </button>
          <button onClick={handleNextClick} disabled={!hasNext}>
            Next
          </button>
        </ButtonDiv>


        <div>
        <TitleExperience>{previewingJob.company} <ItalicSpan> in {previewingJob.country} </ItalicSpan> </TitleExperience>
          <ImageExperience src={previewingJob.imgSrc} />
          <button onClick={handleMoreClick}>
            {!showMore ? "Show more info..." : "Hide info"}{" "}
          </button>
          {showMore && (
            <MoreInfoDiv showMore={showMore} turningOff={turningOff}>
              <Subtitle>
                From {previewingJob.period} I worked as {previewingJob.title}{" "}
              </Subtitle>
              <p>{previewingJob.moreInfo}</p>
            </MoreInfoDiv>
          )}
        </div>


      </StyledCard>


    </>
  );
};
export default Experience;

const ButtonDiv = styled.div`
width: 100%;
display: flex;
justify-content: space-around;
`

const StyledCard = styled.div`
width: 80%;
display: flex;
flex-direction: column;
margin: 3em auto;
justify-content: space-between;
`
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
margin: 1em auto;
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
`

const ImageExperience = styled.img`
width:100%;
margin: 1em 0;
`
const Subtitle = styled.h2`
margin-bottom: .4em ;
`
const TitleExperience = styled.h2`
 color: var(--accent-color);
 margin: .6em 0 .2em 0;
`
const ItalicSpan = styled.span`
font-style: italic;
color: var(--accent-color);
`