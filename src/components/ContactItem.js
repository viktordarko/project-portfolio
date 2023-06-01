import styled, { css } from "styled-components";
import { ListDiv, StyledParagraph } from "./ListItem";
import { useState } from "react";

const ContactItem = ({ item }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (item) => {
      item.id === "email"
        ? window.alert(`You can send me an email here: ${item.contactInfo}`)
        : window.open(item.contactInfo, "_blank");
  };

  return (
    <>
      <ContactCardDiv
        onClick={() => handleClick(item)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <StyledContactParagraph isHovered={isHovered}>
          {item.name}
        </StyledContactParagraph>
        <img src={item.iconSrc} alt={item.name} />
      </ContactCardDiv>
    </>
  );
};

const ContactCardDiv = styled(ListDiv)`
  flex-direction: column;
  width: auto;
  justify-content: flex-start;
  transition: transform 0.3s ease-in-out;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }

  @media only screen and (max-width: 700px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const StyledContactParagraph = styled(StyledParagraph)`
  opacity: 0;
  transition: opacity 0.3s ease-in;

  ${(props) =>
    props.isHovered &&
    css`
      opacity: 1;
    `}

  @media only screen and (max-width: 700px) {
    opacity: 1;
    margin-right: 1em;
  }
`;

export default ContactItem;
