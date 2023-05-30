import styled from "styled-components"


const ListItem = ({item}) => {
    
return (
    <ListDiv className="language">
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
width: 25%;
padding: .3em;
flex-wrap: wrap;
`
const StyledParagraph = styled.p`
font-style: italic;

&.programming {
    color: green;
  }
`