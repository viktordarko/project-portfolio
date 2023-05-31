import styled from "styled-components"


const ListItem = ({item}) => {
    
return (
    <ListDiv className={item.contact ? "contactPage" : ""}>
<StyledParagraph className={item.isProgramming ? "programming" : ""}>{item.name}</StyledParagraph>
<img src={item.iconSrc} alt={item.name} />
</ListDiv>
)
}
export default ListItem

const ListDiv = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 50%;
height: 2.8em;
padding: .3em;
flex-wrap: nowrap;

&.contactPage {
flex-direction: column;
}

`
const StyledParagraph = styled.p`
font-style: italic;

&.programming {
    color: green;
  }

`

export {ListDiv, StyledParagraph}