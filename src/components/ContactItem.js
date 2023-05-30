import styled from "styled-components"
import { ListDiv, StyledParagraph } from "./ListItem"
import { Link, useNavigate } from "react-router-dom"


const ContactItem = ({item}) => {
    
    const navigate = useNavigate();
    const handleClick = () => {
          navigate('/contact/form');
      };
return (
    <>
    {item.id === "email" ? (
          <ContactCardDiv onClick={handleClick}>
            <StyledParagraph>{item.name}</StyledParagraph>
            <img src={item.iconSrc} alt={item.name} />
          </ContactCardDiv>
      ) : (
    <a href = {item.contactInfo} >
    <ContactCardDiv>
<StyledParagraph>{item.name}</StyledParagraph>
<img src={item.iconSrc} alt={item.name} />
</ContactCardDiv>
</a>
)}
</>
)
}


const ContactCardDiv = styled(ListDiv)`
flex-direction: column;
width: auto;

&:hover {
    cursor: pointer;
    ///add animation
}
`

export default ContactItem